import Image from 'next/image'
import React from 'react'

import LineDivider from '../../components/atoms/LineDivider'; 
import TeamCard from '../../components/molecules/Card/TeamCard';
import PageSentence from '../../components/molecules/PageSentence';
import SectionSentence from '../../components/molecules/SectionSentence';
import PricingCard from '../../components/molecules/Card/PricingCard';
import IconListItem from '../../components/molecules/IconListItem';
import StatisticList from '../../components/organisms/StatisticList';
import PageTemplate from '../../components/templates/PageTemplate';
import Footer from '../../components/organisms/Footer';
import FirstComponent from './FirstComponent';
import VisionMissionComponent from './VisionMissionSection';
import ICPEducationCard from '../../components/molecules/Card/ICPEducationCard/ICPEducationCard';
import TechJourneyStats from '../../components/molecules/Card/JourneyStarts';
import GrantApplicationCard from '../../components/molecules/Card/GrantApplicationCard/GrantApplicationCard';
import InnovationIncubatorCard from '../../components/molecules/Card/InnovatorCard/InnovatorCard';
import NavBar from '../../components/organisms/NavBar';
import FooterNavBrand from '../../components/atoms/NavBrand/FooterNavBrand';
import Gallery from '../../components/organisms/Gallery/gallery';

const statsData = [
  { value: '20+', label: 'Hackathon' },
  { value: '1k+', label: 'Developers' },
  { value: '10+', label: 'Startups' },
];

const About = () => {
  return (
    // <PageTemplate title="About - ICP Hub Kenya">
    <div>
        <div className='mx-auto max-w-7xl'>
          <NavBar /> 
        </div>
        
        <div className='mb-28 h-[140vh] sm:h-[50vh]'>
          <FirstComponent /> 
        </div>

        <div className="bg-[#212121] p-8">

          <VisionMissionComponent />

          {/* Feature List */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <TechJourneyStats 
                  title="We provide easy medium to get started in your tech journey" 
                  stats={statsData} 
                  isDarkMode={true}
                />
                <GrantApplicationCard 
                  isDarkMode={true}
                /> 
              </div>
              
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ICPEducationCard /> 
                <InnovationIncubatorCard 
                  isDarkMode={true}
                /> 
              </div>

          </section>
        </div>

        <Gallery /> 

        <Footer />
      </div>
    // </PageTemplate>
  )
}

export default About
