import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "MATH-TUTO with ESTO | Math Can Finally Click";
const description = "Friendly, fun, and easy-to-follow math tutorials with Erickson Esto. Be transformed from hating to loving math.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    keywords: ["math tutor", "MATH-TUTO", "Erickson Esto", "math tutorials", "Philippines"],
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: socialImage, width: 1728, height: 907, alt: "MATH-TUTO with ESTO — Be transformed from hating to loving math." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
