import { motion } from "framer-motion";
import React from "react";
import HomepageHeader from "../components/HomepageHeader";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/home/SocialIcons";
import Footer from "../components/Footer";

const Layout: React.FC = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <div className="bg-gray-900">
            <Navbar/>

            <div className="bg-gray-700">
                <div className="backdrop-filter backdrop-blur-md bg-opacity-70  dark:bg-opacity-5">
                    <div className="pt-20 md:pt-32 pb-0 container mx-auto px-10 md:px-42 xl:px-80">
                        <HomepageHeader
                            name="Michael"
                            bio="I'm a freelance software engineer with a passion for everything web and mobile app development. " />
                        <SocialIcons/>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="-mt-2" viewBox="0 0 1440 220"><path fill="rgb(18,21,27)" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>     

            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                transition={{ type: 'linear' }} // Set the transition to linear
                className="container mx-auto text-white px-10 md:px-42 xl:px-80 text-center sm:text-left">
                {children}
            </motion.main>

            <Footer />
        </div>
    )
}

export default Layout;