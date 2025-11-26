import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bimini Square | Waterfront Living Redefined",
    template: "%s | Bimini Square",
  },
  description:
    "Nestled along the Caloosahatchee River, Bimini Square is the centerpiece of Cape Coral’s premier downtown lifestyle. Exclusive leasing for Lee Health employees.",
  keywords: [
    "Bimini Square",
    "Cape Coral",
    "Luxury Apartments",
    "Waterfront Living",
    "Lee Health",
    "Downtown Cape Coral",
    "Apartments for rent Cape Coral",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Bimini Square | Waterfront Living Redefined",
    description:
      "Nestled along the Caloosahatchee River, Bimini Square is the centerpiece of Cape Coral’s premier downtown lifestyle.",
    siteName: "Bimini Square",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bimini Square Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
