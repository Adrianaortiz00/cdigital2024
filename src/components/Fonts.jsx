"use client";
import { Poppins, Space_Grotesk } from "next/font/google";

// Definir las fuentes con todos los pesos requeridos
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700", "500"], // Bold y Medium
  variable: "--font-space-grotesk", // Definir variable CSS
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular y SemiBold
  variable: "--font-poppins", // Definir variable CSS
});

export default function Fonts() {
  return <div className={`${poppins.variable} ${spaceGrotesk.variable}`} />;
}
