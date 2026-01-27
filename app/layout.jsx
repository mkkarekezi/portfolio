import "./globals.css";
import localFont from "next/font/local";

const jersey10 = localFont({
  src: "../public/fonts/jersey10-regular.woff2",
  variable: "--font-jersey10",
});

const RedHatDisplay = localFont({
  src: [
    {
      path: "../public/fonts/RedHatDisplay/RedHatDisplay-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
    {
      path: "../public/fonts/RedHatDisplay/RedHatDisplay-VariableItalic.woff2",
      weight: "200 700",
      style: "italic",
    },
  ],
  variable: "--font-RedHatDisplay",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jersey10.variable} ${RedHatDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
