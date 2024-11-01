import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-Regular.woff",
  variable: "--font-inter",
  weight: "400",
});
const interBold = localFont({
  src: "./fonts/Inter-Bold.woff",
  variable: "--font-inter-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Uni-Pro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interBold.variable} antialiased`}
        style={{ fontFamily: "Inter, sans-serif" }} // Change the font here
      >
        {children}
      </body>
    </html>
  );
}
