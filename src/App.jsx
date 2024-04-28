// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import OurMenu from "./components/OurMenu/OurMenu";
import Comments from "./components/Comments/Comments";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
// import AOS from "aos/dist/aos.css";

export default function App () {

  React.useEffect(() =>{
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
    );
    AOS.refresh();
  })
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <OurMenu />
      <Comments />
      <Newsletter />
      <Footer />
    </main>
  );
}

