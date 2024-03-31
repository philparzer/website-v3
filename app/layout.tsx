import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Philipp Parzer",
  description: "design engineer, entrepreneur, consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} relative font-sans bg-whiteout selection:text-white selection:bg-pink-400 dark:bg-zinc-900 text-blackout dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class">
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
