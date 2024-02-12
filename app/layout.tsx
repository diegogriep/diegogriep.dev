import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Menu } from "@/components/ui/menu";
import { ModeToggle } from "@/components/modeToggle";
import { Logo } from "@/components/ui/logo";


const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400'] });
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
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <header className="flex flex-row items-center justify-between p-12">
            <Logo />
            <Menu />
            <ModeToggle />
          </header>

          <main>
            {children}
          </main>

          <footer>

          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
