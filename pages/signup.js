import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'

const signUp = ()=>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [department, setDepartment] = useState("")
    const [studentSelector, setStudentSelector] = useState(true)
    const [guidingSelector, setGuidingSelector] = useState(false)
    

    const router = useRouter()

    const userSignUp = async(e)=>{
         e.preventDefault()
         const res = await fetch("http://localhost:3000/api/signup",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                department,
                email,
                password,
                studentSelector,
                guidingSelector
            })
         })

         const res2 = await res.json()
         if(res2.error){
            // M.toast({html: res2.error,classes:"red"})
            console.log(res2.error)
         }else{
            // M.toast({html: res2.message,classes:"green"})
            console.log("SignUp form submitted")
            router.push('/login')
         }
    }
    
    // m0ve the signup form slight above
    // style the already signed-up Link
    return(
        <div className="">
            
                <div className="container w-full">
                    <form className="flex-col flex mt-40" onSubmit={(e)=>userSignUp(e)}>
                        <h1>Signup</h1>
                        <input type="text" value={name} name="name" placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}></input>
                        <input type="text" value={department} name="department" placeholder="Department" onChange={(e)=>{setDepartment(e.target.value)}}></input>
                        <input type="email" name="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                        <input type="password" name="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                        {/* above input is just for testing */}
                        {/* implemt logic to make either one true and send the value of Rol={student or Guiding} to sign up Api */}
                        
                        <div className="flex flex-row justify-start"> 
                            <span className={studentSelector?"selector selected":"selector"} onClick={()=>{setStudentSelector(true);setGuidingSelector(false)}}>Student</span>
                            <span className={guidingSelector?"selector selected":"selector"} onClick={()=>{setStudentSelector(false);setGuidingSelector(true)}}>Guiding Light</span>
                        </div>

                        <button className="bg-blue-300" type="submit">Submit</button>
                    </form>
                </div>
                    <span className="absolute mt-4 text-xl"><p>Already Signed-Up?</p><Link href="/login"><a className="text-blue-700"> Login</a></Link></span>  
            </div>
    )
}

export default signUp