import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
    return (
        <div className="flex flex-row  gap-14 w-full justify-center mt-16 pb-14 md:pb-0">
            <a href="https://github.com/michaelrausch" className="text-4xl md:text-6xl text-white hover:text-gray-200" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/michael-rausch-13445b8a/" className="text-4xl md:text-6xl text-white hover:text-gray-200" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/michaelnz_/" className="text-4xl md:text-6xl text-white hover:text-gray-200" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
        </div>
    )
}

export default SocialIcons