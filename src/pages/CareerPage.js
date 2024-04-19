import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareerHero from "../components/CareerHero";
import CareerGallery from "../components/CareerGallery";
import Postions from "../components/Postions";

export default function CareerPage() {
  return (
    <div>
      <Navbar></Navbar>
      <CareerHero></CareerHero>
      <CareerGallery></CareerGallery>
      <Postions></Postions>
      <Footer></Footer>
    </div>
  );
}
