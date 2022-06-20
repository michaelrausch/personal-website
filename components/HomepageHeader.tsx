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
            <div className="">
                <span className="font-extrabold text-3xl mb-3 green-x ">Hey There,</span>
                <h1 className="text-primary text-3xl sm:text-6xl lg:text-7xl  font-extrabold mb-4 text-black dark:text-white ">I&apos;m {name}.</h1>
                <p className="text-2xl text-white sm:text-3xl md:text-3xl max-w-xl font-thin pt-5 font-futura-pt ">{bio}</p>
                <SocialIcons/>
            </div>
            <div className="hidden lg:block ">
                <Canvas
                    shadows={true}
                    className="w-full"
                    style={{backgroundColor: "#12151B"}}
                    camera={{
                        position: [0, 0, 9]
                    }}>
                    <ambientLight color={"white"} intensity={1} />
                    <Earth></Earth>
                    {/* <OrbitControls /> */}
                </Canvas>
            </div>
           
        </div>
    )
}

export default HomepageHeader;