import { useEffect, useState } from "react";

const Footer: React.FC = () => {
    var [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear().toString())
    }, [])

    return (
        <div className="mt-20 w-full">
            <div className="container mx-auto px-10 md:px-42 xl:px-80">
                <p className="font-futura-pt-bold text-white opacity-70 py-10">&copy; Michael Rausch {year}</p>
            </div>
        </div>
    )
}

export default Footer;