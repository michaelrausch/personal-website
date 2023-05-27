import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import SocialIcons from "./home/SocialIcons";

interface Props {
    name: string;
    bio: string;
}

const Earth = dynamic(() => import('./Earth'), { ssr: false })

const HomepageHeader: React.FC<Props> = ({name, bio}) => {

    return (
        <div className="flex justify-between">
            <div className="pt-14">
                <span className="text-xl md:text-3xl mb-3 font-itc-avant-garde-gothic-pro " style={{color: "#163300"}}>Hey There,</span>
                <h1 className="text-primary text-6xl md:text-7xl lg:text-7xl font-itc-avant-garde-gothic-pro font-bold tracking-tighter mt-2" style={{color: "#163300"}}>I&apos;m {name}.</h1>
                <p className="text-lg md:text-2xl text-white sm:text-xl md:text-lg max-w-2xl font-itc-avant-garde-gothic-pro pt-3" style={{color: "#163300"}}>{bio}</p>

                <div className="py-5"></div>
                <a className="py-3 px-5 pt-4 rounded-xl font-itc-avant-garde-gothic-pro" style={{backgroundColor: "#163300", color: "#9FE870"}} href={"https://cv.michaelraus.ch"} target="_blank" rel="noreferrer">Download CV</a>


                <SocialIcons/>
            </div>
            <div className="hidden 2xl:block ">
                <Canvas
                    shadows={true}
                    className="w-full"
                    // style={{backgroundColor: "#12151B"}}
                    camera={{
                        position: [0, 0, 9]
                    }}>
                    <ambientLight color={"white"} intensity={1.8} />
                    <Earth></Earth>
                    {/* <OrbitControls /> */}
                </Canvas>
            </div>

        </div>
    )
}

export default HomepageHeader;
