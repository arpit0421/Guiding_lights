import Link from 'next/link'
import { parseCookies } from 'nookies'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'

// add Discusions & Ask li to Navbar to the right of Guiding light .
// make Guiding light on thr Navbar more attractive

const NavBar = ()=>{
    
    const cookieUser = parseCookies()
    const User = cookieUser.user ? JSON.parse(cookieUser.user) : ""
    const router = useRouter()

    let userLoggenIn = false
    if(cookieUser.token){
        userLoggenIn = true
    }
    else{
        userLoggenIn = false
    }

    const userLogout = (e)=>{
        cookie.remove('token')
        cookie.remove('user')
        router.push('/login')
    }

    return(
        <div className="navbar flex flex-row fixed w-full pl-2">
                <Link href="/"><a className="py-5 font-bold">Guiding Light</a></Link>
                <ul className="flex-row flex absolute right-20">
                    
                    { userLoggenIn ? 
                        <>
                            <li className="mx-4 pt-2.5">
                                <Link href="profile/[profileid]" as={`profile/${User._id}`}><a>profile</a></Link> {/* /profile/:profileid*/}
                            </li>
                            <li className="mx-4 pt-2.5">
                                <button className="bg-red-400 p-3 border-2" onClick={(e)=>userLogout(e)}>Logout</button>
                            </li>
                        </>
                        
                        :
                        <>
                            <li className="mx-4 pt-2.5">
                                <Link  href="/login"><a>Login</a></Link>
                            </li>
                            <li className="mx-4 pt-2.5">
                                <Link href="/signup"><a>Signup</a></Link>
                            </li>
                        </>
                    }
                    
                </ul>
            </div>
    )
}

export default NavBar