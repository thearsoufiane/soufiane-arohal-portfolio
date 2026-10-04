import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soufiane Arohal — Digital products for businesses",
  description: "Developer, digital designer and product builder."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
