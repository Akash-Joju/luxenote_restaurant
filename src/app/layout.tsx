// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout"; // ✅ moved client logic

export const metadata: Metadata = {
  title: "Burpies",
  description: "Restaurant Booking App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-yellow-300 text-gray-900 relative min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
