import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Extract session token correctly
  const token =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  // Redirect authenticated users away from login/register pages
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect unauthenticated users to login if accessing protected routes
  if (!token && ["/dashboard", "/profile", "/settings"].some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", req.url));
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
    "/login", // Intercept login
    "/register", // Intercept register
  ],
};
