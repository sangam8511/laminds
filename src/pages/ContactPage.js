import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import Question from "../components/Question";
import Form from "../components/Form";

export default function ContactPage() {
  return (
    <div>
      <Navbar></Navbar>
      <ContactHero></ContactHero>
      <Question></Question>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}
