import { _Metadata } from "@/lib/_metadata";
import "../styles/tailwindcss.css";

export const metadata = _Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="max-w-3xl mx-auto min-h-screen p-2"
      >
        {children}
      </body>
    </html>
  );
}
