import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import "../styles/Projects.css";
import project1Image from "../assets/images/denta.JPG";
import project2Image from "../assets/images/estore.JPG";
import project3Image from "../assets/images/crud.JPG";
import uiDesign1 from "../assets/images/figma/login.png";
import uiDesign2 from "../assets/images/figma/restaurant menu.png";
import uiDesign3 from "../assets/images/figma/temp.png";
import uiDesign4 from "../assets/images/figma/web 2.png";

function Projects() {
  const [activeTab, setActiveTab] = useState("development");
  const [selectedImage, setSelectedImage] = useState(null);

  const developmentProjects = [
    {
      title: "Dental Clinic Website",
      description:
        "A modern dental clinic website with appointment booking and service details.",
      image: project1Image,
      stack: ["React", "TypeScript", "HTML", "CSS"],
      links: [ { label: "Code", url: "https://github.com/SubodhaSenani/Denta" },
        { label: "Live Demo", url: "https://subodhasenani.github.io/Denta/" } ]
    },
    {
      title: "E-Commerce Website",
      description: "Responsive frontend for an e-commerce platform.",
      image: project2Image,
      stack: ["React Vite", "TypeScript", "Bootstrap"],
       links: [ { label: "Code", url: "https://github.com/SubodhaSenani/E-store" },
        { label: "Live Demo", url: "https://subodhasenani.github.io/E-store/" } ]
    },
    {
      title: "CRUD Application",
      description: "A simple CRUD web app with clean UI and smooth interactions.",
      image: project3Image,
      stack: ["HTML", "CSS", "JavaScript"],
      links: [ { label: "Code", url: "https://github.com/SubodhaSenani/CRUD" },
        { label: "Live Demo", url: "https://subodhasenani.github.io/CRUD/" } ]
    },
  ];

  const uiDesigns = [uiDesign1, uiDesign2, uiDesign3, uiDesign4];

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Tabs */}
      <div className="project-tabs">
        {["development", "design"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "development" ? "Development" : "UI Designs"}
          </button>
        ))}
      </div>

      {/* Development Projects */}
      {activeTab === "development" ? (
        <motion.div
          className="project-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {developmentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card {...project} type="development" />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // Horizontal Design Gallery
        <motion.div
          className="design-gallery-advanced"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {uiDesigns.map((image, index) => (
            <motion.div
              className="design-frame"
              key={index}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image} alt={`UI Design ${index + 1}`} />
            </motion.div>
          ))}

          {/* Modal Preview */}
          {selectedImage && (
            <motion.div
              className="modal-overlay"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={selectedImage}
                alt="Full View"
                className="modal-image"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
