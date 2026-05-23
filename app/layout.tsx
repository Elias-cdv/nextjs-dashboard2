import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next"; // 1. Importa esto

// 2. Define el objeto metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard", // El %s se sustituye por el título de la página
    default: "Acme Dashboard", // Si una página no tiene título, usa este
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
