import { _Metadata } from "@/lib/_metadata";
import "../styles/tailwindcss.css";
import { cn } from "@/lib/utils";

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
        className={cn("max-w-3xl mx-auto min-h-screen p-2")}
      >
        {children}
      </body>
    </html>
  );
}
