import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Faraz Shah | Back-End & Full-Stack Developer",
  description: "Faraz Shah - Back-End & Full-Stack Developer specializing in Node.js, Express.js, MongoDB, REST APIs, React.js, and Tailwind CSS. Based in Karachi, Pakistan.",
  icons: {
    icon: "/FS.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${montserrat.variable} font-poppins bg-zinc-900 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
