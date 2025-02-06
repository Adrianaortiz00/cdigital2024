"use client";
import { Poppins, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], 
});

export default function Fonts() {
  return <div className={`${poppins.variable} ${spaceGrotesk.variable}`} />;
}
