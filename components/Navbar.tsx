import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div className="w-full" style={{backgroundColor: "#030301"}}>
            <div className="mx-auto py-5 flex justify-between text-black dark:text-white px-10 md:px-42 xl:px-80 text-xl" style={{color: "#e6e6e6"}}>
                <Link href="/">
                    <a className="flex-1 font-bold text-xl">
                        <h1 className="">Michael Rausch</h1>
                    </a>
                </Link>
                <ul className="flex-1 text-right font-itc-avant-garde-gothic-pro text-sm pt-1">
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
