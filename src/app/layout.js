import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
    weight: "400",
    subsets: ["latin"],
  });

export const metadata = {
  title: "Donald La | Founder",
  description: "Melbourne",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

