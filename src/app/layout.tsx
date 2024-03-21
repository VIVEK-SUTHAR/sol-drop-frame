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
        <meta name="of:accepts:farcaster" content="vNext" />
        <meta name="of:version" content="vNext" />
        <meta name="fc:frame:post_url" content="https://sol-drop-frame.vercel.app/api/drop" />
        <meta name="of:post_url" content="https://sol-drop-frame.vercel.app/api/drop" />
        <meta name="fc:frame:button:1" content="Get 1 Devnet Sol " />
        <meta property="of:accepts:xmtp" content="2024-02-01" />


        <meta name="of:button:1" content="Get 1 Devnet Sol " />
        <meta property="fc:frame:image" content="https://sol-drop-frame.vercel.app/initial.jpg" />
        <meta name="fc:frame:input:text" content="Enter your Solana address" />
        <meta name="of:input:text" content="Enter your Solana address" />
        <meta property="og:image" content="https://sol-drop-frame.vercel.app/initial.jpg" />
        <meta property="of:image" content="https://sol-drop-frame.vercel.app/initial.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
