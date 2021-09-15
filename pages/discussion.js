// fetch & display all the quesions with their author and date, likes, answers etc
//
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import Link from 'next/link'
import cookie from 'cookie'
// import question from '../models/question'

const discussion = ({questions})=>{

    return(
        <>
        <div><h1>This is a Discussion a page</h1></div>
        {questions.map((question)=>{
            return(
                <div key={question._id}>
                    <p>{question.quest}</p>
                    <p>{question.postedBy}</p>
                </div>
                

            )
        })}

        </>
    )
}

export default discussion

export async function getStaticProps(ctx){
    const cookieUser = parseCookies(ctx)
    const User = cookieUser.user ? JSON.parse(cookieUser.user) : ""
    
    // const router = useRouter()
    // if(!cookieUser.token){
    //     router.push("/login")
        // const {res} = ctx
        // res.writeHead(302, {location:"/login"})
        // res.end()
    // }

    const res = await fetch('http://localhost:3000/api/discussion',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()
    console.log(data)

    if(data.error){
        console.log(error)
    }

    return{
        props:{
            questions: data
        }
    }
}