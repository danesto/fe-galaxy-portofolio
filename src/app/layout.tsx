import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Navigation } from "@/components";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "FE Galaxy",
  description: "Frontend Galaxy - Personal portfolio of a frotend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
