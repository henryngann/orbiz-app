import type { Metadata } from "next";

import "./globals.css";
import { robotoCondensed } from "@/style/fonts";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Orbiz Take Home",
  description: "Henry's take home assignment for Orbiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
