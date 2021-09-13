
import Link from 'next/link'
import {useState} from 'react'
import cookie from 'js-cookie'
import {useRouter} from 'next/router'

const Login = ()=>{

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = async(e)=>{

        e.preventDefault()

        const res = await fetch('http://localhost:3000/api/login', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const res2 = await res.json()
        if(res2.error){
            // res2.status(422).json({error:"error occured while login"})
            // return
            console.log(res2.error)
        }
        else{
            // console.log(res2.token)
            cookie.set('token', res2.token)
            // cookie.set('User',res2.currUser)
            router.push('/discussion')
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
                    <span className="absolute text-xl mt-4"><p>Not Registered?</p><Link href="/signup"><a className="text-blue-700"> SignUp</a></Link></span>
            </div>
    )
}

export default Login