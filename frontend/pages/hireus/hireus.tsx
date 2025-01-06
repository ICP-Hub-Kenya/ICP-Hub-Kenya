import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Tevin Isaac",
    image: "/images/HireTevin.png",
    linkedin: "https://www.linkedin.com/in/tevin-isaac",
    details: "Blockchain Developer and Technical Lead with expertise in Internet Computer Protocol. Experienced in smart contract development, DeFi protocols, and Web3 infrastructure.",
    languages: ["Motoko", "Rust", "JavaScript", "Solidity"]
  },
  {
    name: "Steve Kimoi",
    image: "/images/HireSteve.png",
    linkedin: "https://www.linkedin.com/in/steve-kimoi",
    details: "Full Stack Developer specializing in Web3 technologies. Proficient in building decentralized applications and implementing blockchain solutions using ICP and other protocols.",
    languages: ["TypeScript", "Motoko", "Python", "React"]
  },
  {
    name: "Mary Usaji",
    image: "/images/HireMary.png",
    linkedin: "https://www.linkedin.com/in/mary-usaji",
    details: "Community Manager and Blockchain Educator with strong expertise in project management. Skilled in organizing blockchain workshops and fostering developer communities.",
    languages: ["JavaScript", "Motoko", "HTML/CSS"]
  },
  {
    name: "Silas Wunda",
    image: "/images/HireSilas.png",
    linkedin: "https://www.linkedin.com/in/silas-wunda",
    details: "Smart Contract Developer and Security Expert. Specialized in blockchain architecture, smart contract auditing, and developing secure decentralized solutions.",
    languages: ["Rust", "Motoko", "C++", "Solidity"]
  },
];

const HireUs = () => {
  return (
    <section className="px-5 md:px-0 py-12">
      <div className="container mx-auto max-w-5xl  text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 tracking-tight">
          Hire Us
        </h2>
        <p className="text-2xl font-thin mb-8 sm:text-lg lg:text-xl px-4 sm:px-0">
          At ICP Hub Kenya, we have the highly skilled and professional talents
          available for hire.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-96 h-96 group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#ccc6c6] flex items-center justify-center space-x-2 p-2">
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-[#ccc6c6]/70 flex flex-col justify-between text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[90%]">
                <div className="flex items-center justify-center space-x-2 mb-2 mt-4">
                  <h3 className="text-xl font-bold text-center">
                    {member.name}
                  </h3>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
                <p className="text-md mb-4 w-[70%] mx-auto">
                  {member.details}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.languages.map((language, idx) => (
                    <span key={idx} className="bg-black/20 px-3 py-1 rounded-full text-sm">
                      {language}
                    </span>
                  ))}
                </div>
                <a 
                  href={`mailto:info@icpkushite.com?subject=Hiring Inquiry for ${member.name}&body=Hello ICP Hub Kenya,%0D%0A%0D%0AI am interested in working with ${member.name}. I would like to discuss potential collaboration opportunities.%0D%0A%0D%0ABest regards`}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 border border-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireUs;
