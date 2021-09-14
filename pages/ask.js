// form to post questions
import jwt from "jsonwebtoken"
import { parseCookies } from "nookies"
import {useRouter} from 'next/router'
import {useState} from 'react'

// import question from '../models/question'

const askForm = (props)=>{

    const[quest, setQuest] = useState("")
    const[postedBy, setPostedBy] = useState(props.userInfo.userId)
    const[likes, setLikes] = useState(0)
    // const[]
    const router = useRouter()

    // console.log(typeof(props.userInfo.userNow.userId))
    
    const askQuest = async(e)=>{
        e.preventDefault()

        const res = await fetch('http://localhost:3000/api/ask',{
            headers:{
                "Content-Type":"aplication/json"
            },
            body: JSON.stringify({
                quest:quest,
                postedBy:postedBy,
                likes:0
            })
        })

        const res2 = await res.json()
        if(res2.error){
            console.log(error)
        }else{
            console.log("question posted")
            router.push('/discussion')
        }

    }
 
    return(
        <div className="container-fluid ask-div flex justify-center">
            <form className="" action="/ask" method="post" onSubmit={(e)=>askQuest(e)}>
            <div className="form-group mb-0.5;">
                <h1 className="ask">Ask your doubts here!</h1>
                <textarea placeholder="Type your Question here" onChange={(e)=>{setQuest(e.target.value)}} className="form-control h-100px p-3" name="quest" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" className="bg-blue-200">Ask</button>

            </form>
            <form>
                <button></button>
            </form>
        </div>
    )
}

export default askForm

export async function getServerSideProps(ctx){
    const cookieUser = parseCookies(ctx)
   
    const decoded = jwt.verify(cookieUser.token, process.env.JWT_SECRET)
    const userInfo = decoded
    // console.log(userInfo.userNow.name)
    // console.log(userInfo.userNow.userId)


    if(!cookieUser.token){
        // router.push("/login")
        const {res} = ctx
        res.writeHead(302, {location:"/login"})
        res.end()
    }



    return{
        props:{userInfo}
    }
}