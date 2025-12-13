import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Security Private Chat",
  description: "Security Private Chat",
  authors: [ { name: "7alexandree7", url: "https://github.com/7alexandree7"}]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${JetBrainsMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
