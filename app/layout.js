import { Poppins } from "next/font/google";
import "./globals.css";
import BackBtn from "@/componets/BackBtn";
import SessionWrapper from "@/componets/SessionWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} antialiased`}>
        <SessionWrapper>
          {children}
          <BackBtn />
        </SessionWrapper>
      </body>
    </html>
  );
}
