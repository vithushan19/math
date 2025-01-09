import Image from "next/legacy/image";
import React from "react";

const disabledJobs = [
  "Product Manager",
  "Digital Marketer",
];

const JobGroup = ({ subheading, jobs }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-4">{subheading}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {jobs.map((job) => {
        const isDisabled = disabledJobs.includes(job.title); // Check if job.title exists in disabledJobs array

        return (
          <div
            key={job.title}
            className={`flex flex-col items-center rounded-lg p-6 shadow-md ${
              isDisabled
                ? "bg-gray-300 text-black"
                : "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105"
            } cursor-pointer transition duration-300`}
          >
            <h2 className="text-lg font-semibold mb-4">
              <a href={job.link} className="text-black hover:underline">
                {job.title}
              </a>
            </h2>
            <div className="w-32 h-32 overflow-hidden">
              <div className="object-cover w-full h-full rounded-full">
                <Image
                  src={job.image}
                  alt={job.title}
                  width={job.width}
                  height={job.height}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);



const JobListComponent = () => {
  const jobs = [
    {
      title: "Front End Developer",
      image: "/images/resources/jobExplorer/FrontEndDev.jpg",
      width: 100,
      height: 100,
      link: "././frontEndDev",
    },
    {
      title: "Back End Developer",
      image: "/images/resources/jobExplorer/BackEndDev.jpg",
      width: 100,
      height: 100,
      link: "././backEndDev",
    },
    {
      title: "Fullstack Developer",
      image: "/images/resources/jobExplorer/FullstackDev.jpg",
      width: 100,
      height: 100,
      link: "././fullstackDev",
    },
    {
      title: "AI Engineer",
      image: "/images/resources/jobExplorer/AiDev.jpg",
      width: 100,
      height: 100,
      link: "././aiEngineer",
    },
    {
      title: "Data Scientist",
      image: "/images/resources/jobExplorer/DataScience.png",
      width: 100,
      height: 100,
      link: "././dataScientist",
    },
    {
      title: "DevOps Engineer",
      image: "/images/resources/jobExplorer/DevOps.png",
      width: 100,
      height: 100,
      link: "././devOpsEngineer",
    },
    {
      title: "Cyber Security Analyst",
      image: "/images/resources/jobExplorer/CyberSecurityAnalyst.jpg",
      width: 100,
      height: 100,
      link: "././cyberSecurityAnalyst",
    },
    {
      title: "Mobile Developer",
      image: "/images/resources/jobExplorer/MobileDev.jpg",
      width: 100,
      height: 100,
      link: "././mobileAppDev",
    },
    {
      title: "Game Developer",
      image: "/images/resources/jobExplorer/GameDev.jpg",
      width: 100,
      height: 100,
      link: "././gameDev"
    },
    {
      title: "UX Designer",
      image: "/images/resources/jobExplorer/UXDesigner.jpg",
      width: 100,
      height: 100,
      link: "././uxDesigner",
    },
    {
      title: "Product Manager",
      image: "/images/resources/jobExplorer/ProductManager.jpg",
      width: 100,
      height: 100,
      link: "././productManager",
    },
    {
      title: "Digital Marketer",
      image: "/images/resources/jobExplorer/DigitalMarketer.jpg",
      width: 100,
      height: 100,
      link: "././digitalMarketer",
    },
  ];

  const beginnerJobs = jobs.filter((job) => job.title.includes("Front End Developer") || job.title.includes("Back End Developer") || job.title.includes("Data Scientist"));
  const intermediateJobs = jobs.filter((job) => job.title.includes("Fullstack Developer") || job.title.includes("Mobile Developer") || job.title.includes("Game Developer"));
  const advancedJobs = jobs.filter((job) => job.title.includes("AI Engineer") || job.title.includes("Cyber Security Analyst") || job.title.includes("DevOps Engineer"));
  const nonTechnicalJobs = jobs.filter((job) => job.title.includes("UX Designer") || job.title.includes("Product Manager") || job.title.includes("Digital Marketer"));

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Job Explorer</h1>

        <p className="text-lg text-gray-700 mb-8 text-center w-3/4 mx-auto">
          Job Explorer is a helpful tool designed to assist students in learning about the requirements and workings of popular jobs in the tech industry. Explore various job roles, their responsibilities, and the skills needed to excel in these careers.
        </p>

        <div className="grid grid-cols-1 gap-8">
          <JobGroup subheading="Beginner" jobs={beginnerJobs} />
          <JobGroup subheading="Intermediate" jobs={intermediateJobs} />
          <JobGroup subheading="Advanced" jobs={advancedJobs} />
          <JobGroup subheading="Non-Technical" jobs={nonTechnicalJobs} />
        </div>
      </div>
    </div>
  );
};

export default JobListComponent;
