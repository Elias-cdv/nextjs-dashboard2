// middleware.ts (en la raíz)
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Usamos ./auth si exportas desde auth.ts, o authConfig directamente
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  if (isOnDashboard) {
    if (isLoggedIn) return true;
    return Response.redirect(new URL("/login", req.nextUrl));
  }
  return true;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
