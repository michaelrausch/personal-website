import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div className="w-full" style={{backgroundColor: "#0072ff"}}>
            <div className="container mx-auto py-5 flex justify-between text-black dark:text-white px-10 md:px-42 xl:px-80 text-xl">
                <Link href="/">
                    <a className="flex-1 font-black text-3xl">
                        <h1 className="">Michael</h1>
                    </a>
                </Link>
                <ul className="flex-1 text-right font-futura-pt-bold text-lg">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;