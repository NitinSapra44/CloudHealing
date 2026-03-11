import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";

export const metadata = {
  title: "About Us | Healing Roots Therapy",
  description:
    "Healing Roots Therapy offers empathetic, diverse, and culturally tailored therapy services. Learn about our mission to make therapy accessible and stigma-free.",
  keywords: [
    "therapy",
    "counseling",
    "mental health",
    "multicultural therapy",
    "Healing Roots Therapy",
  ],
  authors: [{ name: "Healing Roots Therapy" }],
  openGraph: {
    title: "About Us | Healing Roots Therapy",
    description:
      "Healing Roots Therapy offers empathetic, diverse, and culturally tailored therapy services. Learn about our mission to make therapy accessible and stigma-free.",
    url: "https://yourwebsite.com/about",
    type: "website",
    images: ["/Blog3.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Healing Roots Therapy",
    description:
      "Healing Roots Therapy offers empathetic, diverse, and culturally tailored therapy services. Learn about our mission to make therapy accessible and stigma-free.",
    images: ["/Blog3.jpg"],
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <Header2 />
      <main>{children}</main>
      <Footer />
    </>
  );
}
