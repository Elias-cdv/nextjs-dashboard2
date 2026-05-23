import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized() {
      // ESTO DEJA PASAR A CUALQUIERA SIN PEDIR CONTRASEÑA
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
