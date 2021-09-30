import AnswerCard from "../../components/AnswerCard"
import DiscussionsCard from "../../components/DiscussionsCard"
import React, { Component } from 'react'
import cookies from "js-cookie"
import jwt from "jsonwebtoken"
export class answer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             answer:""
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.nameFinder=this.nameFinder.bind(this)
    }
    async nameFinder(){
        const token = cookies.get("token")
        const decoded = await jwt.decode(token)
        const userInfo = decoded
        this.setState({name:userInfo.userNow.name})

        }
    componentDidMount(){
        this.nameFinder()
        if(document.getElementById("__next").offsetHeight>window.innerHeight){
            document.getElementById("footer").classList.remove("footerbottom")
        }
    }
    componentWillUnmount(){
        if(document.getElementById("__next").offsetHeight>window.innerHeight){
            document.getElementById("footer").classList.add("footerbottom")
        }
    }
    async onSubmit(e){
        e.preventDefault()
        if(this.state.answer === ""){
            alert("answer can not be empty")
        }
        else{
            const res = await fetch(`http://localhost:3000/api/answer/${this.props.question._id}`,{
                method: "PUT",
                headers:{
                    "Content-Type":"aplication/json"
                },
                body: JSON.stringify({
                    quest_id:this.props.question._id,
                    name:this.state.name,
                    answer:this.state.answer
                })
            })
            const res2 = await res.json()
            if(res2.message == "done"){
                alert("Answer added successfully")
                window.location.reload()
            }

        }

    }
    
    render() {
        return (
            <>
            <div className="answerpage">
                <DiscussionsCard key={this.props.question._id} quest={this.props.question.quest} postedByName = {this.props.question.postedByName}
                        ans={this.props.question.answer} likes = {this.props.question.likes} _id={this.props.question._id} onDiscussions={false}/>
                <form onSubmit={this.onSubmit} className="answerform">
                    <h1>Have an Answer?</h1>
                    <textarea placeholder="Type your answer here" onChange={(e)=>{this.setState({answer:e.target.value})}}></textarea>
                    <button className="bg-blue-200" type="submit">Submit</button>
                </form>
                {this.props.question.answer.map((answer)=>{
                    return(
                        <AnswerCard key={answer._id} question={this.props.question._id} name={answer.name} answer={answer.answer} />
                    )
                })}
            </div>
            </>
        )
    }
}

export default answer




export async function getStaticProps({params})
{
    const res = await fetch(`http://localhost:3000/api/answer/${params.questid}`, {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    const data = await res.json()

    return{
        props:{
            question:data
        }
    }

}

export async function getStaticPaths()
{
    const res = await fetch('http://localhost:3000/api/discussion',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()
    const paths = data.map(ques=>{
        return{
            params:{questid: ques._id.toString()}
        }
    })

    // console.log(paths) trial

    return{
        paths,
        fallback: false
    }
}