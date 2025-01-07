import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Christine Okoth",
    image: "/images/HireChris.png",
    linkedin: "https://www.linkedin.com/in/christine-okoth/",
    github: "https://github.com/chriss1525",
    portfolio: "https://drive.google.com/file/d/1taIKZWhDn0pB4aMdUtBtyGwby-hVQTuc/view?usp=drive_link",
    details: "ALX software engineering graduate with expertise in backend and smart contract development. Notable projects include icfootprint by Carboncrowd, Investafarm, and Fries memecoin development. Certified in Rust 101 and TypeScript 101.",
    languages: ["Rust", "TypeScript"],
  },
  {
    name: "Sylus Abel",
    image: "/images/HireSylus.jpeg",
    linkedin: "https://www.linkedin.com/in/sylus-abel/",
    github: "https://github.com/divin3circle",
    portfolio: "https://drive.google.com/file/d/1yNFFMqF_Ht5YpODyK7xhKgALg1d3DCde/view?usp=sharing",
    details: "BSc. Mechanical Engineering student with over two years of development experience. Graduate of ICP Hub Incubation program specializing in DeFi products. Experienced in ReactJS, React Native, and blockchain development using ICP's Toolkit Azle.",
    languages: ["TypeScript", "C", "Solidity", "GO"],
  },
  {
    name: "Eugene Karewa",
    image: "/images/HireEugene.jpg",
    linkedin: "https://www.linkedin.com/in/eugene-karewa-99616b1a2/",
    github: "https://github.com/Eugenekarewa",
    portfolio: "https://drive.google.com/open?id=1k3y4EFJiV6VTbhPalVwu-CRRrC8g8gG6",
    details: "Certified blockchain developer specializing in beginner-friendly solutions. Completed blockchain development certification in 2024. Based in Kilifi, Kenya, focusing on making blockchain technology accessible to newcomers.",
    languages: ["TypeScript", "Python"],
  },
  {
    name: "Henry Kimani",
    image: "/images/HireKimani.jpg",
    linkedin: "https://www.linkedin.com/in/kimani-henry",
    github: "https://github.com/h3nryk",
    portfolio: "https://henry.jetbrainscollege.com/",
    details: "Full stack developer with 3 years of experience, specializing in Rust and TypeScript. Certified in advanced development technologies. Passionate about advancing in the tech space with expertise in blockchain development.",
    languages: ["JavaScript", "Python", "Motoko"],
  },
  {
    name: "Hannah Mwangi",
    image: "/images/HireHannah.jpg",
    linkedin: "https://www.linkedin.com/in/hannah-mwangi-wamziss/",
    github: "https://github.com/Wamziss",
    portfolio: "https://wamziss-portfolio.vercel.app/",
    details: "Experienced Web3 developer with 2 years of Web2 background. Active participant in ICP hackathons and certified in Rust development. Passionate about mentoring and supporting others in the development community.",
    languages: ["JavaScript", "Motoko", "Python", "Rust"],
  },
  // {
  //   name: "Cheryl Owala",
  //   image: "/images/default-profile.png",
  //   linkedin: "https://www.linkedin.com/in/cheryl-owala-423731191/",
  //   details: "Technical Lead for Rust in Kisumu Chapter. Full-stack developer specializing in Golang and Rust at Zone01 Kisumu. Active technical writer and community contributor.",
  //   languages: ["Golang", "JavaScript", "Rust"],
  //   github: "https://github.com/Cherrypick14"
  // },
  // {
  //   name: "Brandistone Mabeya",
  //   image: "/images/default-profile.png",
  //   linkedin: "https://www.linkedin.com/in/brandistone-mabeya/",
  //   details: "Developer focused on blockchain technologies with expertise in multiple programming languages.",
  //   languages: ["TypeScript", "Django", "Kotlin"],
  //   github: "https://github.com/brandistone"
  // },
  {
    name: "John Mokaya",
    image: "/images/HireJohn.jpg",
    linkedin: "www.linkedin.com/in/john-mokaya-3b926a261",
    github: "https://github.com/mokayaj857",
    portfolio: "https://john-mokaya.vercel.app/",
    details: "Frontend developer with specialized experience in blockchain development platforms. Completed frontend development certification and actively applying decade course knowledge in platform development.",
    languages: ["Python", "Motoko", "Rust"],
  }
];

const HireUs = () => {
  return (
    <section className="px-5 md:px-0 py-12">
      <div className="container mx-auto max-w-5xl text-center">
        <h2
          onClick={() => {
            const subject = encodeURIComponent(`Hiring Inquiry for Steve}`);
            const body = encodeURIComponent(`Hello ICP Hub Kenya,\n\nI am interested in working with Steve. I would like to discuss potential collaboration opportunities.\n\nBest regards`);
            window.location.href = `mailto:info@icpkushite.com?subject=${subject}&body=${body}`;
          }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 tracking-tight">
          Hire Our Certified Developers
        </h2>
        <p className="text-xl font-thin mb-8 sm:text-lg lg:text-xl px-4 sm:px-0">
          Our talented developers are graduates of intensive training programs including the ICP Hub Incubation Program, 
          ALX Software Engineering, Hackathons and specialized courses in Rust, TypeScript, and blockchain development. Each developer 
          brings certified expertise and practical experience in building real-world applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-80 h-80 group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#ccc6c6] flex items-center justify-center space-x-2 p-2 transition-opacity duration-300 group-hover:opacity-0 z-10">
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-[#ccc6c6]/70 flex flex-col justify-between text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[90%] overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center space-x-2 mb-2 mt-4">
                    <h3 className="text-lg font-bold text-center">
                      {member.name}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-600"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-700"
                      >
                        <FaGithub size={20} />
                      </a>
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium hover:text-blue-600"
                        >
                          Portfolio
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm px-4 flex-grow">
                    {member.details}
                  </p>
                  <div className="flex flex-col items-center gap-2 p-2">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.languages.map((language, idx) => (
                        <span key={idx} className="bg-black/20 px-3 py-1 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => {
                        const subject = encodeURIComponent(`Hiring Inquiry for ${member.name}`);
                        const body = encodeURIComponent(`Hello ICP Hub Kenya,\n\nI am interested in working with ${member.name}. I would like to discuss potential collaboration opportunities.\n\nBest regards`);
                        window.location.href = `mailto:info@icpkushite.com?subject=${subject}&body=${body}`;
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 border border-black cursor-pointer w-fit"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireUs;
