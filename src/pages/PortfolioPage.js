import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/PorfolioHero";
import Form from "../components/Form";
import PortfolioGallery from "../components/PortfolioGallery";
import PortfolioTalk from "../components/PortfolioTalk";
export default function ServicePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <PortfolioGallery></PortfolioGallery>
      <PortfolioTalk></PortfolioTalk>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}
