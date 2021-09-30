import React, { Component } from 'react'
import Link from "next/link"
import dbconnect from "../helpers/dbconnect"
export class DiscussionsCard extends Component {
    render(props) {
        return (
            <div className="discussioncard">
                <img src="/profilepic.jpg"></img>
                <h1>{this.props.postedByName}</h1>
                <p>{this.props.quest}</p>
                {[1].map((element)=>{if(this.props.onDiscussions){return(<div>
                <span className="likes">
                    Likes <img src="/like.png"></img>: {this.props.likes}   
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
