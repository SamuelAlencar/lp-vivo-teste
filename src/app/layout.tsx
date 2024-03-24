import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Vivo Teste",
  description: "Vivo Teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-[#F5F0F0]">
          <div className="container-full h-full bg-[#FFFAFA] ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
