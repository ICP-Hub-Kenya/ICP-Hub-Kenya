import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Tevin Isaac",
    image: "/images/HireTevin.png",
    linkedin: "https://www.linkedin.com/in/tevin-isaac",
    details: "Tevin is a blockchain developer and software engineer with four years of experience specializing in JavaScript, Solidity, and Rust. As the lead developer at ICP Hub Kenya, he co-leads the Olympus Accelerator Program and organizes hackathons to inspire innovation in dApps applications on ICP.",
    languages: ["Motoko", "Rust", "JavaScript", "Solidity"],
    github: "https://github.com/tevinisaac"
  },
  {
    name: "Steve Kimoi",
    image: "/images/HireSteve.png",
    linkedin: "https://www.linkedin.com/in/steve-kimoi",
    details: "Full Stack Developer specializing in Web3 technologies. Proficient in building decentralized applications and implementing blockchain solutions using ICP and other protocols.",
    languages: ["TypeScript", "Motoko", "Python", "React"],
    github: "https://github.com/Stephen-Kimoi"
  },
  {
    name: "Christine Okoth",
    image: "/images/HireChris.png",
    linkedin: "https://www.linkedin.com/in/christine-okoth/",
    details: "Backend and smart contract developer with experience in blockchain projects like icfootprint, Investafarm, and Fries Coin development. ALX software engineering graduate.",
    languages: ["Rust", "TypeScript"],
    github: "github.com/chriss1525"
  }, 
  {
    name: "Sylus Abel",
    image: "/images/HireSylus.jpeg",
    linkedin: "https://www.linkedin.com/in/sylus-abel/",
    details: "BSc. Mechanical Engineering student with over two years of development experience. Specialized in ReactJS, React Native, and blockchain development using ICP's Toolkit Azle.",
    languages: ["TypeScript", "C", "Solidity", "GO"],
    github: "https://github.com/divin3circle"
  },
  {
    name: "Eugene Karewa",
    image: "/images/HireEugene.jpg",
    linkedin: "https://www.linkedin.com/in/eugene-karewa-99616b1a2/",
    details: "Blockchain developer with focus on beginner-friendly solutions. Based in Kilifi, Kenya.",
    languages: ["TypeScript", "Python"],
    github: "https://github.com/Eugenekarewa"
  },
  {
    name: "Henry Kimani",
    image: "/images/HireKimani.jpg",
    linkedin: "https://www.linkedin.com/in/kimani-henry",
    details: "Full stack developer with expertise in Rust and TypeScript. Passionate about advancing in the tech space.",
    languages: ["JavaScript", "Python", "Motoko"],
    github: "https://github.com/h3nryk"
  },
  {
    name: "Hannah Mwangi",
    image: "/images/HireHannah.jpg",
    linkedin: "https://www.linkedin.com/in/hannah-mwangi-wamziss/",
    details: "Web3 developer with 2 years of Web2 experience. Active participant in ICP hackathons and passionate about helping others in the development community.",
    languages: ["JavaScript", "Motoko", "Python", "Rust"],
    github: "https://github.com/Wamziss"
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
    details: "Frontend developer with experience in blockchain development platforms.",
    languages: ["Python", "Motoko", "Rust"],
    github: "https://github.com/mokayaj857"
  }
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
              <div className="absolute inset-x-0 bottom-0 bg-[#ccc6c6] flex items-center justify-center space-x-2 p-2 transition-opacity duration-300 group-hover:opacity-0 z-10">
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
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
