import "./css/globals.css";
import localFont from "next/font/local";

const jersey10 = localFont({
  src: "../public/fonts/jersey10-regular.woff2",
  variable: "--font-jersey10",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jersey10.variable}>
      <body>{children}</body>
    </html>
  );
}
