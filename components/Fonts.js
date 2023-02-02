import {
  Martian_Mono,
  Exo_2,
  Source_Code_Pro,
} from "@next/font/google";

export const martian_mono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--martian-mono",
});

export const exo2 = Exo_2({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-exo",
});

export const source_code = Source_Code_Pro ({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-source-code",
  });