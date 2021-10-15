import React, { Component } from 'react'
import Link from "next/link"
import cookies from 'js-cookie'
import  jwt  from 'jsonwebtoken'
export class DiscussionsCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             likes:this.props.likes
        }
        this.toggleLike = this.toggleLike.bind(this)

    }
    componentDidMount(){
        const token = cookies.get("token")
        const decoded = jwt.decode(token)
        this.setState({_id:decoded.userNow.userId})
    }
    async toggleLike(){
        const res = await fetch('http://localhost:3000/api/toggleLike', {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                _id:this.state._id,
                questId:this.props._id
            })
        })
        const res2 = await res.json()
        this.setState({likes:res2.likes})
    }
    
    render(props) {
        return (
            <div className="discussioncard">
                <img src="/profilepic.jpg"></img>
                <h1>{this.props.postedByName}</h1>
                <p>{this.props.quest}</p>
                {[1].map((element)=>{if(this.props.onDiscussions){return(<div key={element}>
                <span className="likes">
                    <button onClick={this.toggleLike}>Likes <img src="/like.png"></img></button>: {this.state.likes.length-1}   
                </span>
                <span className="anslength">
                    <Link href={`/answer/${this.props._id}`}><a>Ans</a></Link> : {this.props.ans.length}
                </span>
                </div>)}})}
            </div>
        )
    }
}

export default DiscussionsCard
