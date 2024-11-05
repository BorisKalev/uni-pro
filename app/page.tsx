import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Apropos from "@/components/APropos";
import CommentCaMarche from "@/components/CommentCaMarche";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Apropos />
      <CommentCaMarche />
      <Footer />
    </>
  );
}
