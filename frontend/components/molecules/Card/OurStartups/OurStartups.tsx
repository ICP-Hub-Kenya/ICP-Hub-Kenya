import React from "react";

const startups = [
  {
    title: "Fries Coin",
    description:
      "Fries Coin began with a simple yet compelling idea: to unite fries enthusiasts worldwide through a unique cryptocurrency. As fries lovers ourselves, we recognized the need for a community where people could share their love for fries, from recipes to favorite fries spots.",
    logo: "/images/FRYS.png",
    twitterLink: "https://x.com/FriesCoin",
    websiteLink: "https://friescoin.xyz/",
    email: "info@icpkushite.com",
  },
  {
    title: "Investa Farm",
    description:
      "At Investa Farm, we empower farmers by providing easy access to essential financial services. Our platform simplifies the loan application process, allowing you to secure quick and insured loans directly from local agrostores.",
    logo: "/images/InvestaFarm.png",
    twitterLink: "https://x.com/Investa_farm",
    websiteLink: "https://investafarm.com/",
    email: "info@icpkushite.com",
  },
  {
    title: "IThreeM",
    description:
      "I3M aims to become the go-to platform for creating, sharing, and monetizing 3D virtual worlds. Whether you're a developer, a gamer, or a virtual reality enthusiast, I3M offers the tools and ecosystem to bring your digital creations to life.",
    logo: "/images/I3M.png",
    twitterLink: "https://x.com/IThr3M",
    websiteLink: "https://ithreem.com/",
    email: "info@icpkushite.com",
  },
  {
    title: "Chama DAO",
    description:
      "ChamaDAO is a decentralized platform designed to empower traditional Chama groups with modern blockchain solutions, offering financial growth and stability.",
    logo: "/images/ChamaDAO.png",
    twitterLink: "https://x.com/TheChamaDAO",
    websiteLink: "https://thechamadao.xyz/",
    email: "info@icpkushite.com",
  },
];

const OurStartups = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Our Startups
        </h2>
        <p className="text-2xl font-thin mb-8 sm:text-lg text-center lg:text-xl px-4 sm:px-0">
          ICPs vision is that most of the worlds software will be replaced by
          smart contracts. To realize that vision, ICP is designed to make
          smart contracts as powerful as traditional software.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {startups.map((startup, index) => (
                <div
                key={index}
                className="relative w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200 group overflow-hidden"
                >
                <div className="flex items-center justify-between mb-4">
                    <div>
                    <img
                        src={startup.logo}
                        alt={`${startup.title} Logo`}
                        className="h-12 w-12 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-gray-800">{startup.title}</h3>
                    </div>
                    <div className="flex space-x-4">
                    <a
                        href={startup.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <img src="/images/x.png" alt="Twitter Link" className="h-6 w-6" />
                    </a>
                    <a
                        href={startup.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/images/website.png" alt="Website Link" className="h-6 w-6" />
                    </a>
                    </div>
                </div>
                <p className="font-thin text-sm mb-8 text-start px-4 sm:px-0">{startup.description}</p>

                {/* Invest Button */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-center py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a
                    href={`mailto:${startup.email}`} // Dynamically set the email
                    className="text-white font-bold"
                    >
                    INVEST
                    </a>
                </div>
                </div>
            ))}
            </div>
      </div>
    </section>
  );
};

export default OurStartups;