import { Poppins as PoppinsFont } from "next/font/google";

export const Poppins = PoppinsFont({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--poppins"
});
