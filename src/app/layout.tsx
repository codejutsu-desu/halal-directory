"use client";
import { Providers } from "@/app/providers/providers";
import { RestaurantProvider } from "../app/providers/RestaurantContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Providers>
          <RestaurantProvider>{children}</RestaurantProvider>
        </Providers>
      </body>
    </html>
  );
}
