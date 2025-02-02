import nodemailer from 'nodemailer';

const sendMagicLink = async (email) => {

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const magicLink = `${process.env.NEXTAUTH_URL}/verify?token=${encodeURIComponent(email)}`;

  // Verify the SMTP connection configuration
  try {
    await transport.verify();
  } catch (error) {
    console.log(error)
    return;
  }

  try {
    const sendMessage = await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Magic Link for 2FA",
      html: `<p>Click the link below to verify your login:</p><a href="${magicLink}">${magicLink}</a>`,
    });
    console.log(sendMessage)

  } catch (error) {
    console.log(error)

  }






  console.log("Magic link sent to", email);
};

export default sendMagicLink;
