import React, { useState, useEffect } from "react";
import Hero from "../components/constaint/Hero";
import Card from "../components/constaint/Card";
import Purpose from "../components/constaint/Purpose";
import Team from "../components/constaint/Team";
import Supporter from "../components/constaint/Supporter";
import Question from "../components/constaint/Question";
import Contact from "../components/constaint/Contact";
import Modal from "../components/constaint/Modal"; // Import Modal

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show modal when the component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Hero />
      <Card />
      <Purpose />
      <Team />
      <Supporter />
      <Question />
      <Contact />
      <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Show modal here */}
    </>
  );
};

export default Home;
