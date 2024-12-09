import React from "react";

const startups = [
  {
    title: "Fries Coin",
    description:
      "Fries Coin began with a simple yet compelling idea: to unite fries enthusiasts worldwide through a unique cryptocurrency. As fries lovers ourselves, we recognized the need for a community where people could share their love for fries, from recipes to favorite fries spots.",
    logo: "/images/FRYS.png",
    twitterLink: "https://x.com/FriesCoin",
    websiteLink: "https://friescoin.xyz/",
  },
  {
    title: "Investa Farm",
    description:
      "At Investa Farm, we empower farmers by providing easy access to essential financial services. Our platform simplifies the loan application process, allowing you to secure quick and insured loans directly from local agrostores.",
    logo: "/images/InvestaFarm.png",
    twitterLink: "https://x.com/Investa_farm",
    websiteLink: "https://investafarm.com/",
  },
  {
    title: "IThreeM",
    description:
      "I3M aims to become the go-to platform for creating, sharing, and monetizing 3D virtual worlds. Whether you're a developer, a gamer, or a virtual reality enthusiast, I3M offers the tools and ecosystem to bring your digital creations to life.",
    logo: "/images/I3M.png",
    twitterLink: "https://x.com/IThr3M",
    websiteLink: "https://ithreem.com/",
  },
  {
    title: "Chama DAO",
    description:
      "ChamaDAO is a decentralized platform designed to empower traditional Chama groups with modern blockchain solutions, offering financial growth and stability.",
    logo: "/images/ChamaDAO.png",
    twitterLink: "https://x.com/TheChamaDAO",
    websiteLink: "https://thechamadao.xyz/",
  },
];

const OurStartups = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Our Startups
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          ICPs vision is that most of the worlds software will be replaced by
          smart contracts. To realize that vision, ICP is designed to make
          smart contracts as powerful as traditional software.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {startups.map((startup, index) => (
                <div
                    key={index}
                    className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200"
                >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <div>
                            <img
                                src={startup.logo}
                                alt={`${startup.title} Logo`}
                                className="h-16 w-16 rounded-full object-cover"
                            />
                            <h3 className="text-xl font-bold text-gray-800">
                                {startup.title}
                            </h3>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <a href={startup.twitterLink} target="_blank" rel="noopener noreferrer">
                                <img src="/images/x.png" alt="Twitter Link" className="h-6 w-6" />
                            </a>
                            <a href={startup.websiteLink} target="_blank" rel="noopener noreferrer">
                                <img src="/images/website.png" alt="Website Link" className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                    <a
                        href={startup.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href={startup.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <i className="fas fa-globe"></i>
                    </a>
                    </div>
                </div>
                <p className="text-sm text-gray-600">{startup.description}</p>
                </div>
            ))}
            </div>
      </div>
    </section>
  );
};

export default OurStartups;