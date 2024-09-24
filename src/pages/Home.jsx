// import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrackRecord from "../components/TrackRecord";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Final from "../components/Final";
import Calendar from "../components/Calendar";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import TrackRecord1 from "../components/TrackRecord1";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero1/>
      <TrackRecord1/>
      <Hero2/>
      {/* <Hero />
      <Calendar/>
      <TrackRecord /> */}
      <Carousel />
      <FAQ />
      <Final/>
      <Footer />
    </div>
  );
}

export default Home;
