import React from "react";

const teamMembers = [
  {
    name: "Tevin Isaac",
    image: "/images/Profiles/Tevin.png",
    linkedin: "https://www.linkedin.com/in/tevin-isaac",
  },
  {
    name: "Steve Kimoi",
    image: "/images/Profiles/Steve.png",
    linkedin: "https://www.linkedin.com/in/steve-kimoi",
  },
  {
    name: "Mary Usaji",
    image: "/images/Profiles/Mary.png",
    linkedin: "https://www.linkedin.com/in/mary-usaji",
  },
//   {
//     name: "Silas Wunda",
//     image: "/path-to-image/silas-wunda.jpg",
//     linkedin: "https://www.linkedin.com/in/silas-wunda",
//   },
];

const HireUs = () => {
  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 tracking-tight">Hire Us</h2>
        <p className="text-2xl font-thin mb-8 sm:text-lg text-center lg:text-xl px-4 sm:px-0">
          At ICP Hub Kenya, we have the highly skilled and professional talents
          available for hire.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group aspect-square overflow-hidden bg-gray-100 rounded-lg cursor-pointer"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 bg-white/75 backdrop-blur-md w-full p-4">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-gray-500 hover:text-blue-600"
                >
                  <span className="flex items-center space-x-1">
                    <img
                      src="/images/linkedIn.png"
                      alt="LinkedIn"
                      className="h-5 w-5"
                    />
                    <span>LinkedIn</span>
                  </span>
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