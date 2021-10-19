import Link from 'next/link'
import cookies from 'js-cookie'

// add Discusions & Ask li to Navbar to the right of Guiding light .
// make Guiding light on thr Navbar more attractive
import React, { Component } from 'react'
import Jwt from 'jsonwebtoken'

export class NavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.userLogout = this.userLogout.bind(this)
    }
    userLogout(){
        cookies.remove("token")
        window.location.href = "/login"
        window.location.reload()
    }
    componentDidMount(){
    const token = cookies.get("token")
    if(token){
        const decoded = Jwt.decode(token)
        this.setState({
            userLoggenIn:true,
            _id:decoded.userNow.userId            
        })
    }
    else{
        this.setState({userLoggedIn:false})
    }
    
    }
    render() {
        return(
            <div className="navbar flex flex-row fixed pl-2 py-4 ">
                    <Link href="/"><a className="font-bold guidingHeading">Guiding Light</a></Link>
                    <Link href="/discussion"><a className="ml-6 mt-2 text-gray-600 hover:text-black navbarItems ">Discussion</a></Link>
                    <Link href="/ask"><a className="ml-6 mt-2 text-gray-600 hover:text-black navbarItems ">Ask a question</a></Link>
    
                    <ul className="loginsignup">
                        
                        { this.state.userLoggenIn ? 
                            <>
                                <li className="mx-4">
                                    <Link  href={`profile/${this.state._id}`}><a>profile</a></Link> {/* /profile/:profileid*/}
                                </li>
                                <li className="mx-4">
                                    <button onClick={(e)=>this.userLogout(e)}>logout</button>
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
    
}

export default NavBar