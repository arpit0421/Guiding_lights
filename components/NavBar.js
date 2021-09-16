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
        cookie.remove('User')
        router.push('/login')
    }

    return(
        <div className="navbar flex flex-row fixed pl-2 py-4 ">
                <Link href="/"><a className="font-bold guidingHeading">Guiding Light</a></Link>
                <Link href="/discussion"><a className="ml-6 mt-2 text-gray-600 hover:text-black navbarItems ">Discussion</a></Link>
                <Link href="/ask"><a className="ml-6 mt-2 text-gray-600 hover:text-black navbarItems ">Ask a question</a></Link>

                <ul className="loginsignup">
                    
                    { userLoggenIn ? 
                        <>
                            <li className="mx-4">
                                <Link href="profile/[profileid]" as={`profile/${User._id}`}><a>profile</a></Link> {/* /profile/:profileid*/}
                            </li>
                            <li className="mx-4">
                                <button onClick={(e)=>userLogout(e)}>logout</button>
                            </li>
                        </> 
                        
                        :
                        <>
                            <li className="mx-4">
                                <Link  href="/login"><a>Login</a></Link>
                            </li>
                            <li className="mx-4">
                                <Link href="/signup"><a>Signup</a></Link>
                            </li>
                        </>
                    }
                    
                </ul>
            </div>
    )
}

export default NavBar