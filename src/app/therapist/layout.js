import Footer from "@/components/Footer"
import Header2 from "@/components/Header2"
export default function AboutLayout({ children }) {
  return (
    <>
      <Header2/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
