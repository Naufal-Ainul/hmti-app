import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin panel for HMTI",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
