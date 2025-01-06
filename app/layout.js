import { Inter, Teachers } from "next/font/google";
import "./globals.css";
import "@fontsource-variable/teachers";
import Script from "next/script"; // 关键：引入 next/script

// const inter = Inter({ subsets: ["latin"] });
// const teachers = Teachers({ subsets: ["latin"] });

export const metadata = {
  title: "EgoLife",
  description: "EgoLife NTU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SELQYCGE0Z"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SELQYCGE0Z');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
