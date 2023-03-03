import "@/styles/globals.css";
import { Open_Sans } from "@next/font/google";
import Header from "@/components/header/header";
const openSans = Open_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={openSans.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
