
interface Props {
    name: string;
    bio: string;
}

const HomepageHeaderWidget: React.FC<Props> = ({name, bio}) => {
    return (
        <div className="text-center">
            <span className="font-extrabold text-3xl mb-3 text-green-500 text-center">Hey There,</span>
            <h1 className="text-primary text-3xl sm:text-6xl lg:text-7xl text-center font-extrabold mb-4 text-black dark:text-white ">I&apos;m {name}.</h1>
            <p className="text-2xl text-black dark:text-gray-100 sm:text-3xl md:text-3xl max-w-xl font-thin pt-5 font-futura-pt text-center mx-auto">{bio}</p>
        </div>
    )
}

export default HomepageHeaderWidget;