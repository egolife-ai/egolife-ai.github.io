import { Inter, Teachers } from "next/font/google";
import "./globals.css";
import "@fontsource-variable/teachers";

// const inter = Inter({ subsets: ["latin"] });
// const teachers = Teachers({ subsets: ["latin"] });

export const metadata = {
  title: "EgoLife",
  description: "EgoLife NTU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
