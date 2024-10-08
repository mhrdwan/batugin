import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Batugin",
  description: "Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
  authors: [{ name: "Ridwan"}],
  openGraph:[],
  icon: './icon.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
