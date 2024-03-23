import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Next Construction Website",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
         <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet"></link> 
         </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}