import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useScrollPercentage } from "react-scroll-percentage";
import HomepageHeaderWidget from "../components/homepagewidgets/HomepageHeaderWidget";
import Navbar from "../components/Navbar";

const Layout: React.FC = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <div className="bg-gray-900 pb-96">
            <Navbar/>

            <div className="mb-20 bg-gray-800">
                <div className="backdrop-filter backdrop-blur-md bg-opacity-70 bg-gray-800 dark:bg-opacity-5">
                    <div className="py-32  container mx-auto px-10 md:px-42 xl:px-80 bg-gray-800">
                        <HomepageHeaderWidget
                            name="Michael"
                            bio="I'm a freelance software engineer with a passion for everything web and mobile app development. " />
                    </div>
                </div>
                
            </div>


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