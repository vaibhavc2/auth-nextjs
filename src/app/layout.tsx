import { ThemeProvider } from "@/components/providers";
import { Inter } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Auth NextJS",
  description: "Authentication in NextJS"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            Inter.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
