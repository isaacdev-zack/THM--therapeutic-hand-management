import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Therapeutic Hands Management (THM) | Caregiver Training School Nairobi & Kisumu",
  description: "NITA-certified Caregiver Training Institution empowering caregivers with life-saving skills in Nairobi and Kisumu. Partnered with CHANCEN International for Study Now, Pay Later financing.",
  keywords: ["Caregiver training Nairobi", "Caregiver school Kenya", "NITA certified caregiving", "CHANCEN study now pay later", "Therapeutic Hands Management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-inter bg-white text-thm-ink">
        {children}
      </body>
    </html>
  );
}
