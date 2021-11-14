import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useScrollPercentage } from "react-scroll-percentage";
import HomepageHeaderWidget from "../components/homepagewidgets/HomepageHeaderWidget";
import Navbar from "../components/Navbar";
import { FaBeer, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Layout: React.FC = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <div className="bg-gray-900 pb-96">
            <Navbar/>

            <div className="bg-gray-800">
                <div className="backdrop-filter backdrop-blur-md bg-opacity-70 bg-gray-800 dark:bg-opacity-5">
                    <div className="py-32 pb-0 container mx-auto px-10 md:px-42 xl:px-80 bg-gray-800">
                        <HomepageHeaderWidget
                            name="Michael"
                            bio="I'm a freelance software engineer with a passion for everything web and mobile app development. " />

                        <div className="flex flex-row text-white hover:text-gray-200 gap-14 w-full justify-center mt-16">
                            <a href="https://github.com/michaelrausch" className="text-6xl" target="_blank" rel="noreferrer">
                                <FaGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/michael-rausch-13445b8a/" className="text-6xl" rel="noreferrer"> 
                                <FaLinkedin/>
                            </a>
                            <a href="https://www.instagram.com/michaelnz_/" className="text-6xl" rel="noreferrer">
                                <FaInstagram/>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#171A20" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>     

            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                transition={{ type: 'linear' }} // Set the transition to linear
                className="container mx-auto text-white px-10 md:px-42 xl:px-80 text-center">
                {children}
            </motion.main>
        </div>
    )
}

export default Layout;