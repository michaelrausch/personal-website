import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import('./Earth'), { ssr: false })

const Footer: React.FC = () => {
    var [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear().toString())
    }, [])

    return (
        <div className="w-full" style={{backgroundColor: "#9FE870"}}>
            <div className="custom-container">
                <p className="font-itc-avant-garde-gothic-pro text-white pt-32 pb-5 text-green-900">&copy; Michael Rausch {year}</p>
            </div>
        </div>
    )
}

export default Footer;
