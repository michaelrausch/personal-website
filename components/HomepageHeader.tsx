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
                <span className="text-xl md:text-3xl mb-3 font-itc-avant-garde-gothic-pro " style={{color: "#fff"}}>Hey There 👋</span>
                <h1 className="text-primary text-6xl md:text-7xl lg:text-7xl font-itc-avant-garde-gothic-pro font-bold tracking-tighter mt-2" style={{color: "#fff"}}>I&apos;m {name}.</h1>
                <p className="text-lg md:text-lg text-white sm:text-xl  max-w-2xl font-itc-avant-garde-gothic-pro pt-5" style={{color: "#fff"}}>{bio}</p>

                <div className="py-0"></div>

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
