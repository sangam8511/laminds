import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/ServiceHero";
import Quation from "../components/Quotation";
import Services from "../components/ServicePageSection";
import Review from "../components/Review";
import Form from "../components/Form";
export default function ServicePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Quation></Quation>
      <Review></Review>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}
