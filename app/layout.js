import "./globals.css";
import { Manrope } from "next/font/google";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";

const manrope = Manrope({
        subsets: ["latin"],
        weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
        title: "Ruta Venezuela",
        description: "Descubre. Vive. Explora. Conecta. El mapa para recorrer Venezuela.",
        manifest: "/manifest.json",
};

export const viewport = {
        themeColor: "#1C3A54",
        width: "device-width",
        initialScale: 1,
};

export default function RootLayout({ children }) {
        return (
                  <html lang="es" className={manrope.className}>
      <body className="min-h-screen bg-white text-ink pb-20 md:pb-0">
                      <TopNav />
                      <div className="mx-auto max-w-5xl">{children}</div>
              <BottomNav />
              </body>
              </html>
        );
}
