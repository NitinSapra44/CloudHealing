import { Geist, Geist_Mono, Roboto, Poppins as GooglePoppins ,Inter,Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const torus = localFont({
  src: "../fonts/torus.otf", // adjust path if needed
  variable: "--font-torus",
  weight: "400",
  style: "normal",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = GooglePoppins({
  weight: ["300", "400", "500", "600", "700"], // specify weights explicitly
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: {
    default: "Cloud Healing",
    template: "%s | Cloud Healing", // Page titles become "Page Name | Cloud Healing"
  },
  description: "Cloud Healing - Innovative cloud solutions for modern businesses.",
  keywords: ["Cloud Healing", "cloud services", "hosting", "SaaS"],
  authors: [{ name: "Nitin Sapra", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Cloud Healing",
    description: "Innovative cloud solutions for modern businesses.",
    url: "https://yourwebsite.com",
    siteName: "Cloud Healing",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Healing preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Healing",
    description: "Innovative cloud solutions for modern businesses.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
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
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${roboto.variable} 
        ${torus.variable} 
        ${poppins.variable}
      `}>
      {children}
      </body>
    </html>
  );
}
