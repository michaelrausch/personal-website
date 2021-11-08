import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useScrollPercentage } from "react-scroll-percentage";
import Navbar from "../components/Navbar";

const Layout: React.FC = ({ children }) => {    
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 pb-96 ">
            <Navbar/>
            
            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                transition={{ type: 'linear' }} // Set the transition to linear
                className="container mx-auto text-white px-10 md:px-42 xl:px-80">
                {children}
            </motion.main>
        </div>
    )
}

export default Layout;