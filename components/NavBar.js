import Link from 'next/link'

// add Discusions & Ask li to Navbar to the right of Guiding light .
// make Guiding light on thr Navbar more attractive

const NavBar = ()=>{
    
    return(
        <div className="navbar flex flex-row fixed w-full pl-2">
                <Link href="/"><a className="py-5 font-bold">Guiding Light</a></Link>
                <ul className="flex-row flex absolute right-20">
                    <li className="mx-4 pt-2.5">
                        <Link  href="/login">
                            <a>
                                Login
                            </a>
                        </Link>
                    </li>
                    <li className="mx-4 pt-2.5">
                        <Link href="/signup">
                            <a>
                                Signup
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
    )
}

export default NavBar