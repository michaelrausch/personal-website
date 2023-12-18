import { motion } from "framer-motion";
import React, { ReactNode, useState, useCallback } from "react";
import HomepageHeader from "../components/HomepageHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Konami from "react-konami-code";
import { Button, ThemeProvider } from '@react95/core';
import dynamic from 'next/dynamic'
import { useReward } from 'react-rewards';

//@ts-ignore
const ChromeDinoGame  = dynamic(() => import('react-chrome-dino'), {
    ssr: false,
})

interface Props {
    children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    const [inKonami, setInKonami] = useState(false)

    const { reward, isAnimating } = useReward('konamireward', 'emoji', {
        zIndex: 1000,
        position: 'fixed',
        elementCount: 200,
        lifetime: 2000,
        spread: 189,
        startVelocity: 80,
        angle: 70,
        emoji: ["🎉", "🍕", "🦖"]
    });

    return (
        <div style={{ backgroundColor: !inKonami ? "#CC2936" : "#000", }}>
            <div id="konamireward" className="fixed h-screen bottom-0 left-0 top-0  "></div>

            <Navbar />

            <div className="pattern" style={{backgroundImage: "url('magicpattern-starry-night-1702885435236.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className=" pb-32">
                    <div className="pt-20 md:pt-12 pb-0  mx-auto custom-container">
                        <HomepageHeader
                            name="Michael"
                            bio="A Software Engineer working on UC Online at the University of Canterbury" />
                    </div>
                </div>
            </div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" className="-mt-2" viewBox="0 0 1440 220"><path fill="#030301" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}

            <motion.main
                variants={variants} // Pass the variant object into Framer Motion
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                transition={{ type: 'linear' }} // Set the transition to linear
                className="text-white  text-center sm:text-left">
                {children}
                <Konami action={() => setInKonami(true)}>
                    <ThemeProvider>
                        <Button onClick={reward}>Click me!</Button>
                    </ThemeProvider>
                </Konami>

            </motion.main>


            <Footer />
        </div>
    )
}

export default Layout;

