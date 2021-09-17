// fetch & display all the quesions with their author and date, likes, answers etc
//
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import Link from 'next/link'
import cookie from 'cookie'
import DiscussionsCard from '../components/DiscussionsCard'
// import question from '../models/question'

const discussion = ({questions})=>{

    return(
        <>
        <h1 className="discussions">Discussions</h1>
        <div className="flex flex-col justify-center mt-[12rem]">
            {questions.map((question)=>{
                return(
                    <DiscussionsCard key={question._id} quest={question.quest} postedByName = {question.postedByName}
                    ans={question.answer} likes = {question.likes}
                    />
                    
                    
                    )
                })}
        </div>

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
    console.log(User);
    return{
        props:{
            questions: data
        }
    }
}