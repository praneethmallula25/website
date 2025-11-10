import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aertsen - Luxury Interior Design",
  description: "Transform your living spaces into personalized sanctuaries that blend luxury, comfort, and your unique style. Where every detail tells your story.",
  keywords: ["luxury interior design", "home design", "interior decorator", "luxury homes", "custom design"],
  authors: [{ name: "Aertsen Interior Design" }],
  openGraph: {
    title: "Aertsen - Luxury Interior Design",
    description: "Transform your living spaces into personalized sanctuaries",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
