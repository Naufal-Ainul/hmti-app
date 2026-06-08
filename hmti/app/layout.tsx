import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HMTI UMP — Himpunan Mahasiswa Teknik Informatika",
    template: "%s | HMTI UMP",
  },
  description:
    "Website resmi Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Purwokerto. Wadah kreativitas, inovasi, dan pengembangan potensi mahasiswa informatika.",
  icons: {
    icon: "https://res.cloudinary.com/dxjptcgdd/image/upload/v1769009884/HMTI_dj9rvx.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-slate-950 text-slate-200`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
