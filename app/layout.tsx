import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Main } from "@/components/ui/main";

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '600'] });
export const metadata: Metadata = {
  title: "Diego Griep | Senior Frontend Engineer",
  description: "Diego Griep, Frontend Developer with over 15+ years of experience on the frontend side of the force",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />

          <Main>
            {children}
          </Main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
