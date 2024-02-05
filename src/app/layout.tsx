import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolDrop",
  description: "Get devnet sol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:post_url" content="/api/drop" />
        <meta name="fc:frame:button:1" content="Get 1 Devnet Sol " />
        <meta name="fc:frame:input:text" content="Enter your Solana address" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
