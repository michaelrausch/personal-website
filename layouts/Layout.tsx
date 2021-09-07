import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Layout: React.FC = ({ children }) => {
    const [colorTheme, setTheme] = useDarkMode();

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <div className="bg-gray-800 pb-96">
            <div className="w-full bg-gray-700">
                <div className="container mx-auto py-5 flex justify-between text-white px-10 lg:px-52 text-xl">
                    <Link href="/">
                        <a>
                            <h1 className="flex-1 font-futura-pt-bold">Michael Rausch | Blog</h1>
                        </a>
                    </Link>
                    <ul className="flex-1 text-right font-futura-pt-bold text-lg">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>

            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                transition={{ type: 'linear' }} // Set the transition to linear
                className="container mx-auto text-white px-10 lg:px-52">
                {children}
            </motion.main>
        </div>
    )
}

export default Layout;