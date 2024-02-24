import "./globals.css";
import { Hind } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const hind = Hind({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={hind.className}>{children}</body>
    </html>
  );
}
