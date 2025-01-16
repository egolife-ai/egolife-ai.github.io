import { Inter, Teachers } from "next/font/google";
import "./globals.css";
import "@fontsource-variable/teachers";
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });
// const teachers = Teachers({ subsets: ["latin"] });

export const metadata = {
  title: "EgoLife",
  description: "EgoLife NTU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 这里可以放任何其他元信息或 <meta> 标签 */}
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SELQYCGE0Z"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SELQYCGE0Z');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
