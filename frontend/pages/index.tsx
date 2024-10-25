import React from "react";
import {
  FiFigma,
  FiCode,
  FiBox,
  FiDollarSign,
  FiAirplay,
} from "react-icons/fi";

import ButtonLink from "../components/atoms/Button/ButtonLink";
import LineDivider from "../components/atoms/LineDivider";
import FeatureCard from "../components/molecules/Card/FeatureCard";
import PageSentence from "../components/molecules/PageSentence";
import PricingCard from "../components/molecules/Card/PricingCard";
import ProjectCard from "../components/molecules/Card/ProjectCard";
import SectionSentence from "../components/molecules/SectionSentence";
import LogoList from "../components/organisms/LogoList";
import PageTemplate from "../components/templates/PageTemplate";
import Image from "next/image";
import TeamCard from "../components/molecules/Card/TeamCard";
import CallOut from "../components/organisms/CallOut";
import Footer from "../components/organisms/Footer";
import Link from "next/link";
import TechJourneyStats from "../components/molecules/Card/JourneyStarts";
import GrantApplicationCard from "../components/molecules/Card/GrantApplicationCard/GrantApplicationCard";
import ICPEducationCard from "../components/molecules/Card/ICPEducationCard/ICPEducationCard";
import InnovationIncubatorCard from "../components/molecules/Card/InnovatorCard/InnovatorCard";
import VisionVideoCard from "../components/molecules/Card/VisionCard/VisionCard";
import BlockchainEducationBanner from "../components/molecules/Card/BlockchainEducationBanner/BlockchainEducationBanner";
import NavBar from "../components/organisms/NavBar";
import Gallery from "../components/organisms/Gallery/gallery";

const statsData = [
  { value: "20+", label: "Hackathon" },
  { value: "1k+", label: "Developers" },
  { value: "10+", label: "Startups" },
];

const Home = () => {
  return (
    <>
      <PageTemplate title="Home - ICP HUB KE">

        <NavBar />

        {/* Banner Section */}
        <BlockchainEducationBanner />

        {/* Feature List */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 p-8">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TechJourneyStats
              title="We provide easy medium to get started in your tech journey"
              stats={statsData}
            />
            <GrantApplicationCard />
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ICPEducationCard />
            <InnovationIncubatorCard />
          </div>
        </section>

        {/* Vision Card */}
        <VisionVideoCard />

        {/* Our Teams */}
        <section className="bg-[#4b1c1c] items-center py-12 px-4 sm:px-8 md:px-12 w-full">
          
          {/* <div className="bg-[#4b1c1c] flex items-center py-12 px-4 sm:px-8 md:px-12 w-full"> */}
            <h1 className="text-white text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
              Our Core Team
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-[80%] lg:ml-32 ml-12"> 
              {/* Team member 1 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Yvonne.png"
                    alt="Yvonne Kagondu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Yvonne Kagondu
                </h3>
                <p className="text-gray-300">CO-FOUNDER</p>
              </div>

              {/* Team member 2 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Tevin.png"
                    alt="Tevin Isaac"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">Tevin Isaac</h3>
                <p className="text-gray-300">DEVELOPER RELATIONS</p>
              </div>

              {/* Team member 3 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Mary.png"
                    alt="Mary Usaji"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">Mary Usaji</h3>
                <p className="text-gray-300">PROJECT MANAGER</p>
              </div>
              {/* Team member 4 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Steve.png"
                    alt="Steve KImoi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">Steve Kimoi</h3>
                <p className="text-gray-300">DEVELOPER RELATIONS</p>
              </div>

              {/* Team member 5 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Bellah.png"
                    alt="Bella Chris"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">Bella Chris</h3>
                <p className="text-gray-300">COMMUNITY MANAGER</p>
              </div>
              {/* Team member 6 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Sammy.png"
                    alt="Sammy Fash"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">Sammy Fash</h3>
                <p className="text-gray-300">LEAD DESIGNER</p>
              </div>
              {/* Team member 7 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Orlah.png"
                    alt="Peace Adekoya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Peace Adekoya
                </h3>
                <p className="text-gray-300">SOCIAL MEDIA MANAGER</p>
              </div>
              {/* Team member 8 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Maic.png"
                    alt="Maic Sebakara"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Maic Sebakara
                </h3>
                <p className="text-gray-300">ICP RWANDA SPOKE</p>
              </div>
              {/* Team member 9 */}
              <div className="flex flex-col items-center">
                <div className="w-50 h-64 rounded-md mb-4 overflow-hidden">
                  <img
                    src="/images/Profiles/Charles.png"
                    alt="Charles Maina"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Charles Maina
                </h3>
                <p className="text-gray-300">TECHNICAL WRITER</p>
              </div>
            {/* </div> */}
          </div>
        </section>

        <LineDivider />

        <Gallery />
        {/* </div> */}
      </PageTemplate>

      <Footer />
    </>
  );
};

export default Home;
