import NavBar from '../../organisms/NavBar'
import CallOut from '../../organisms/CallOut'
import Footer from '../../organisms/Footer'
import React, { ReactNode, useEffect } from 'react'
import Container from '../Container'
import Head from 'next/head'
import useGetBrowserName from '../../../hooks/useGetBrowserName'

interface PageTemplateProps {
  children: ReactNode[] | JSX.Element
  title?: string
  light?: boolean
}
const PageTemplate = ({ 
  children, 
  title = 'ICP Hub Kenya', 
  light=false, 
 }: PageTemplateProps) => {
  const browserName = useGetBrowserName()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar Fixed on top */}
      <NavBar />
      {/* Background */}
      {browserName == 'Firefox' ? (
        // <div className="w-full h-fit min-h-screen bg-dark overflow-x-hidden">
          // <div className="w-full h-full min-h-screen relative">
            <div className="w-full h-full min-h-screen relative before:absolute before:w-full before:h-full before:min-h-screen before:bg-[url('/images/page-background.svg')] before:bg-cover before:blur-[175px]">
              {/* Space for navbar, because navbar is absolute */}
              <div
                className={`w-full h-full min-h-screen relative ${
                  browserName === 'Firefox' ? 'bg-dark/[.85]' : 'bg-dark/[.75]'
                } `}
              >
                <div className="h-[105px]"></div>
                {/* Padding */}
                <Container>
                  {children}
                  <div data-aos="">
                    <CallOut />
                  </div>
                  <Footer />
                </Container>
              </div>
            </div>
          // </div>
        // </div>
      ) : (
        <>
        {/* bg-dark/[.80] backdrop-blur-[175px] */}
          <div
            className={`w-full h-fit min-h-screen ${
              light ? 'bg-[#FFEDED]' : 'bg-[#fff8f6]'
            } overflow-x-hidden`}
          >
            <div className="w-full h-full min-h-screen relative bg-cover">
              <div className="w-full h-full min-h-screen relative overflow-visible">
                {/* Space for navbar, because navbar is absolute */}
                <div className="h-[105px]"></div>
                {/* Padding */}
                <Container>
                  {children}
                  {/* <div data-aos="fade-right">
                    <CallOut />
                  </div>
                  <Footer /> */}
                </Container>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default PageTemplate
