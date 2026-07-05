import localFont from "next/font/local";

export const juliaMono = localFont({
  src: [
    { path: "./fonts/JuliaMono/JuliaMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/JuliaMono/JuliaMono-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const inter = localFont({
  src: "./fonts/Inter/Inter-Regular.woff2",
  weight: "100 900",
  variable: "--font-body",
  display: "swap",
});

export const doto = localFont({
  src: "./fonts/Doto/Doto-Black.woff2",
  weight: "100 900",
  variable: "--font-display",
  display: "swap",
});