"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>PHP(Laravel)</li>
        <li>Dart(Flutter)</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MySql</li>
        <li>React Native(New)</li>
        <li>Next.js(new)</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Universitas Dinamika Bangsa</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className='list-disc pl-2'>
        <li>Alterra Academy Mobile Engineer Career With Flutter</li>
        <li>TOEFL</li>
      </ul>
    )
  }
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTabContent = TAB_DATA.find((t) => t.id === tab)?.content || <div>Tab not found</div>;

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl-gap-16 xl:px-16'>
        <Image src={"/images/about-images.jpg"} width={500} height={500} alt="About Image" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit ducimus fugiat sed 
            magni dolorem quos, quasi vitae adipisci in officia deleniti eaque sunt reiciendis quisquam 
            dicta corrupti neque enim!
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}> Certification </TabButton>
          </div>
          <div className='mt-8'>{currentTabContent}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
