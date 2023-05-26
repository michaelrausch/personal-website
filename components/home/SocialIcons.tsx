import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || ""
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL || ""
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || ""

const SocialIcons: React.FC = () => {
    return (
        <div className="flex flex-row  gap-5 w-full  mt-16 pb-14 md:pb-0">
            <a href={GITHUB_URL} className="text-3xl md:text-4xl  hover:text-green-400" style={{color: "#163300"}} target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href={LINKEDIN_URL} className="text-3xl md:text-4xl  hover:text-blue-400"  style={{color: "#163300"}}target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href={INSTAGRAM_URL} className="text-3xl md:text-4xl  hover:text-yellow-300" style={{color: "#163300"}} target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
        </div>
    )
}

export default SocialIcons
