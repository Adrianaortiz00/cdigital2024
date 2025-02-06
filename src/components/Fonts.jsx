"use client";
import { Poppins, Space_Grotesk } from "next/font/google";

// Definir las fuentes con todos los pesos requeridos
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700", "500"], // Bold y Medium
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular y SemiBold
});

export default function Fonts() {
  return <div className={`${poppins.variable} ${spaceGrotesk.variable}`} />;
}
