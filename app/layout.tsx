import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/ui/global.scss";
import Header from "./ui/organisms/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "raiseThemAll",
  description: "Application de gestion d'elevage pour Dofus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="grid grid-rows-[1fr_12fr] grid-col-1 min-h-screen h-min">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
