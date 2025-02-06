const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const { put } = require("@vercel/blob");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });


// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "Token is missing in the Authorization header." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token." });
  }
};


// Fetch KYC Status
router.get("/api/kyc/status", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const [result] = await db.query(
      `SELECT status FROM kyc WHERE user_id = ? ORDER BY created_at DESC LIMIT 1`,
      [userId]
    );

    if (result.length === 0) {
      return res.json({ status: "not_verified" }); // If no KYC record, status is "not_verified"
    }

    return res.json({ status: result[0].status });
  } catch (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({ error: "Failed to fetch KYC status." });
  }
});

// KYC Submission Endpoint
router.post("/api/kyc/submit", verifyToken, async (req, res) => {
  try {
    const { idType, frontUrl, backUrl } = req.body;
    const userId = req.user.id;

    // Check if the user has already submitted KYC and is verified
    const [existingKyc] = await db.query(
      `SELECT status FROM kyc WHERE user_id = ? ORDER BY created_at DESC LIMIT 1`,
      [userId]
    );

    if (existingKyc.length > 0 && existingKyc[0].status === "verified") {
      return res.status(400).json({ error: "You are already verified and cannot submit again." });
    }

    if (!idType || !frontUrl || !backUrl) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const [result] = await db.query(
      `INSERT INTO kyc (user_id, id_type, kyc_front_image, kyc_back_image, status)
       VALUES (?, ?, ?, ?, 'pending')`,
      [userId, idType, frontUrl, backUrl]
    );

    console.log(`KYC submitted for user ${userId}, KYC ID: ${result.insertId}`);
    return res.json({ message: "KYC submitted successfully.", kycId: result.insertId });
  } catch (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({ error: "Failed to submit KYC. Please try again." });
  }
});


router.post(
  "/api/kyc/upload",
  verifyToken,
  upload.fields([{ name: "frontFile" }, { name: "backFile" }]),
  async (req, res) => {
    try {
      const { frontFile, backFile } = req.files;

      if (!frontFile || !backFile) {
        return res.status(400).json({ error: "Both front and back images are required." });
      }

      // Upload the front image to Vercel Blob
      const frontResponse = await put(frontFile[0].originalname, frontFile[0].buffer, {
        access: "public",
      });

      // Upload the back image to Vercel Blob
      const backResponse = await put(backFile[0].originalname, backFile[0].buffer, {
        access: "public",
      });

      // Respond with the file URLs
      res.status(200).json({
        message: "Files uploaded successfully",
        frontUrl: frontResponse.url,
        backUrl: backResponse.url,
      });
    } catch (error) {
      console.error("Upload error:", error.message);
      res.status(400).json({ error: error.message });
    }
  }
);

module.exports = router;
