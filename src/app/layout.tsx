import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://since1994-oasis-portfolio.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "HyeonJi Ahn | Frontend & Backend Developer Portfolio",
    template: "%s | HyeonJi Ahn Portfolio",
  },
  description:
    "사용자 경험을 중심으로 생각하는 프론트엔드 & 백엔드 개발자 안현지의 포트폴리오입니다. React, Next.js, TypeScript, Java Spring Boot를 활용한 6년차 풀스택 개발자의 프로젝트를 확인해보세요.",
  keywords: [
    "안현지",
    "프론트엔드 개발자",
    "풀스택 개발자",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "웹 개발",
    "포트폴리오",
    "Frontend Developer",
    "Fullstack Developer",
    "웹툰 플랫폼",
    "애니툰",
  ],
  authors: [{ name: "안현지", url: baseUrl }],
  creator: "안현지",
  publisher: "안현지",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: baseUrl,
    title: "HyeonJi Ahn | Frontend & Backend Developer Portfolio",
    description:
      "사용자 경험을 중심으로 생각하는 프론트엔드 개발자 안현지의 포트폴리오입니다. React, Next.js, TypeScript, Java Spring Boot를 활용한 6년차 풀스택 개발자의 프로젝트를 확인해보세요.",
    siteName: "HyeonJi Ahn Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "HyeonJi Ahn Portfolio - Frontend & Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyeonJi Ahn | Frontend & Backend Developer Portfolio",
    description:
      "사용자 경험을 중심으로 생각하는 프론트엔드 & 백엔드 개발자 안현지의 포트폴리오입니다.",
    images: ["/images/tabby-mansion/thumbnail1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansKR.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <GoogleAnalytics gaId="G-5X9RPLWSNB" />
      </body>
    </html>
  );
}
