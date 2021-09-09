
interface Props {
    name: string;
    bio: string;
}

const HomepageHeaderWidget: React.FC<Props> = ({name, bio}) => {
    return (
        <>
            <span className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-green-500 dark:text-teal-400 mb-3">Hey There,</span>
            <h1 className="text-primary text-3xl sm:text-6xl lg:text-6xl leading-none font-extrabold tracking-tight mb-4">I&apos;m {name}.</h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 sm:text-3xl md:text-2xl max-w-xl font-thin pt-5 font-futura-pt">{bio}</p>
        </>
    )
}

export default HomepageHeaderWidget;