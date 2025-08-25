import { Orbitron } from "next/font/google";
import "./globals.css";
import BackBtn from "@/componets/BackBtn";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "Theta Ai",
  description:
    "Theta Ai is a cutting-edge AI platform offering powerful, minimalist, and elegant solutions. Discover the future of technology with innovation that speaks through silence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/assets/fav.png" type="image" />
      <body className={`${orbitron.variable} antialiased`}>{children}
        <BackBtn/>
      </body>
    </html>
  );
}
