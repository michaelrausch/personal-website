import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import('./Earth'), { ssr: false })

const Footer: React.FC = () => {
    var [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear().toString())
    }, [])

    return (
        <div className="mt-20 md:mt-0 w-full">
            <img src="/footer.png" className="w-full hidden md:block" alt="" />
            <div className="mx-auto px-10">
                <p className="font-futura-pt-bold text-white opacity-70 py-5">&copy; Michael Rausch {year}</p>
            </div>
        </div>
    )
}

export default Footer;