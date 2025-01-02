"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>PHP(Laravel)</li>
        <li>Dart(flutter)</li>
        <li>React Native</li>
        <li>Next JS</li>
        <li>HardWare Pc</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universitas Dinamika Bangsa</li>
        <li>Alterra Academy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>TOEFL</li>
        <li>CERTIFICATE MSIB OF GRADUATION</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-images.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Saya David Liem, Fresh Graduate dari Universitas Dinamika Bangsa Jambi yang memiliki antusiasme tinggi terhadap dunia Frontend Development dan Backend Development.Sejak awal perjalanan akademis saya, saya selalu bersemangat untuk memahami dan mengikuti perkembangan teknologi terkini. Keahlian saya di Flutter memungkinkan saya merancang dan mengembangkan antarmuka pengguna yang menarik untuk aplikasi seluler. Selain itu, pengetahuan saya tentang Laravel memberi saya dasar yang kuat dalam pengembangan backend, memastikan integrasi yang mulus antara frontend dan backend.Saya selalu mencari peluang untuk belajar dan berkontribusi pada proyek yang menantang. Tentu saja saya juga siap belajar dengan framework yang berbeda. Saat ini saya sedang belajar tentang React Js dan Kotlin serta Framework Framework yang populer.Saya berharap dapat terhubung dengan para profesional, mentor, dan individu yang berpikiran sama yang memiliki minat yang sama dengan saya terhadap Pengembangan Front-End.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
