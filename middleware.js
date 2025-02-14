import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

async function getUserRole(token) {
  if (!token) return null;

  try {
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload.role; // Ensure role is included in the JWT payload
  } catch (error) {
    return null;
  }
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Extract session token correctly
  const token =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;


    const userRole = await getUserRole(token);

 // Redirect authenticated users away from login/register pages
 if (token && (pathname === "/login" || pathname === "/register")) {
  return NextResponse.redirect(new URL(userRole === "admin" ? "/admin/dashboard" : "/dashboard", req.url));
}

  // Redirect unauthenticated users to login if accessing protected routes
  if (!token && ["/dashboard", "/profile", "/settings", "/admin"].some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

    // Redirect based on user role
    if (userRole === "user" && pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (userRole === "admin" && pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next).*)",
    "/dashboard/:path*", // Protect dashboard and its sub-paths
    "/profile/:path*", // Protect profile and its sub-paths
    "/settings/:path*", // Protect settings and its sub-paths
    "/admin/:path*",
    "/login", // Intercept login
    "/register", // Intercept register
  ],
};

