import { getCookieParser } from 'next/dist/server/api-utils'
import Link from 'next/link'
import {useState} from 'react'
import cookie from 'js-cookie'

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = async(e)=>{

        e.preventDefault()

        const res = await fetch('http://localhost:3000/login', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const res2 = res.json()
        if(res2.error){
            return res.status(422).json({error:"error occured while login"})
        }
        else{
            console.log(res2)
            cookie.set('token', res.token)
               
        }
    }
    
    return(
        <div className="">
                <div className="container w-full">
                    <form className="flex-col flex mt-40" onSubmit={(e)=>userLogin(e)}>
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