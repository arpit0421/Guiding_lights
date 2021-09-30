import AnswerCard from "../../components/AnswerCard"
import DiscussionsCard from "../../components/DiscussionsCard"
import React, { Component } from 'react'

export class answer extends Component {
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
        return (
            <>
            <div className="answerpage">
                <DiscussionsCard key={this.props.question._id} quest={this.props.question.quest} postedByName = {this.props.question.postedByName}
                        ans={this.props.question.answer} likes = {this.props.question.likes} _id={this.props.question._id} onDiscussions={false}/>
                <form>
    
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