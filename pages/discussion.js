import { parseCookies } from 'nookies'
import DiscussionsCard from '../components/DiscussionsCard'
// import question from '../models/question'

import React, { Component } from 'react'

export class discussion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    componentDidMount(){
        if(document.getElementById("__next").offsetHeight>window.innerHeight){
            document.getElementById("footer").classList.remove("footerbottom")
        }
    }
    componentWillUnmount(){
        if(document.getElementById("__next").offsetHeight>window.innerHeight){
            document.getElementById("footer").classList.add("footerbottom")
        }
    }
    
    render() {
        return(
            <>
            <h1 className="discussions">Discussions</h1>
            <div className="flex flex-col justify-center mt-[12rem]">
                {this.props.questions.map((question)=>{
                    
                    return(
                        <DiscussionsCard key={question._id} quest={question.quest} postedByName = {question.postedByName}
                        ans={question.answer} likes = {question.likes} _id={question._id} onDiscussions={true}
                        />
                        
                        
                        )
                    })}
            </div>
    
            </> 
        )
    }
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