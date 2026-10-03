import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zara Fredericks — Portfolio",
  description: "I build things, investigate problems, organise messy information and occasionally turn ideas into apps.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
