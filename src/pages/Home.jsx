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
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
import ScrollData from "../components/ScrollData";
import { useEffect, useState } from "react";
function Home() {
      const [isModalOpen, setIsModalOpen] = useState(false);

      useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
          document.body.style.overflow = ""; // Restore scrolling
        }

        return () => {
          document.body.style.overflow = ""; // Clean up on component unmount
        };
      }, [isModalOpen]);

  return (
    <div>
      <Navbar />
      {isModalOpen ? (
        <Hero1
          onOpenModal={() => setIsModalOpen(true)}
          onCloseModal={() => setIsModalOpen(false)}
        />
      ) : (
        <>
            <Hero1 onOpenModal={() => setIsModalOpen(true)} />
            <TrackRecord1/>
            {/* <Hero2/> */}
            <Hero3/>
            <Hero4/>
            <Hero5/>
            <ScrollData/>
            {/* <Hero />
            <Calendar/>
            <TrackRecord /> */}
            <Carousel />
            <FAQ />
            <Final/>
            <Footer />
        </>
      )
    }
    </div>
  );
}

export default Home;
