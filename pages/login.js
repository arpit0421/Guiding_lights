import Link from 'next/link'
import {useState} from 'react'

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return(
        <div className="">
                <div className="container w-full">
                    <form className="flex-col flex mt-40">
                        <h1>Login</h1>
                        <input type="email" value={email} name="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                        <input type="password" value ={password} name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                        
                        <button className="bg-blue-300" type="submit">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default Login