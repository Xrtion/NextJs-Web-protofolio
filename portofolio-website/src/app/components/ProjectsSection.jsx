"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next JS Portfolio Website",
    description: "Pembuatan website portfolio menggunakan Next JS, Yang berisi tentang informasi diri, project yang pernah dikerjakan, dan kontak.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xrtion/NextJs-Web-protofolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Pembuatan Aplikasi Women Center",
    description: "Pembuatan aplikasi Berbasis Mobile dengan menggunakan Flutter yang berisi tentang informasi tentang perempuan, dan juga berbagai macam informasi yang berhubungan dengan perempuan.",
    image: "/images/projects/p1.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Capstone-Tim-14/women-center-mobile",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Sistem Absensi Berbasis Web",
    description: "Pembuatan Sistem Absensi Berbasis Web menggunakan Laravel, yang berisi tentang informasi absensi karyawan, dan juga berbagai macam informasi yang berhubungan dengan absensi karyawan.",
    image: "/images/projects/p2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xrtion/Absensi-berbasis-QR",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "UI Blink It",
    description: "Pembuatan UI Dengan Flutter",
    image: "/images/projects/p3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xrtion/Flutter-Blinkit-clone",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
