// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import OurMenu from "./components/OurMenu/OurMenu";
import Comments from "./components/Comments/Comments";

export default function App () {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <OurMenu />
      <Comments />

    </main>
  );
}

