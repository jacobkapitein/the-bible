import { IsClientCtxProvider } from "@/contexts/IsClientCtx/IsClientCtx";
import "./globals.css";
import { Topbar } from "@/layouts/Topbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "De Bijbel",
  description: "De volledige Statenvertaling van de Bijbel in het Nederlands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`bg-gray-50 text-gray-800 ${inter.className}`}>
        <IsClientCtxProvider>
          <div className="flex flex-col items-center w-full">
            <p>TEST</p>
            <Topbar />
            <div className="pt-32">
              <main className="max-w-2xl px-2">{children}</main>
            </div>
          </div>
        </IsClientCtxProvider>
      </body>
    </html>
  );
}
