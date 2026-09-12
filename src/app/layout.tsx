import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

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
    "NITA-certified caregiver training in Nairobi and Kisumu. Study Now, Pay Later financing available for eligible students.",
  keywords: [
    "Caregiver training Nairobi",
    "Caregiver school Kenya",
    "NITA certified caregiving",
    "Study now pay later caregiver training",
    "Therapeutic Hands Management",
  ],
};

const chunkRecoveryScript =
  process.env.NODE_ENV === "development"
    ? `(function(){var k="thm-chunk-reload";function recover(m){if(!m||m.indexOf("Loading chunk")===-1&&m.indexOf("ChunkLoadError")===-1)return;if(!sessionStorage.getItem(k)){sessionStorage.setItem(k,"1");location.reload();}}window.addEventListener("error",function(e){recover(e.message||"");});window.addEventListener("unhandledrejection",function(e){recover(String((e.reason&&e.reason.message)||e.reason||""));});window.addEventListener("load",function(){sessionStorage.removeItem(k);});})();`
    : null;

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
      <head>
        {chunkRecoveryScript ? (
          <script dangerouslySetInnerHTML={{ __html: chunkRecoveryScript }} />
        ) : null}
      </head>
      <body className="flex min-h-full flex-col font-inter bg-white text-thm-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
