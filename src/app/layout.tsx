import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  title: {
    default:
      "Therapeutic Hands Management (THM) | Caregiver Training Nairobi & Kisumu",
    template: "%s | THM Caregiver School",
  },
  description:
    "NITA-certified caregiver training in Nairobi and Kisumu. Partnered with CHANCEN International for Study Now, Pay Later financing.",
  keywords: [
    "Caregiver training Nairobi",
    "Caregiver school Kenya",
    "NITA certified caregiving",
    "CHANCEN study now pay later",
    "Therapeutic Hands Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-white text-thm-ink">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
