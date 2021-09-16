import React, { Component } from 'react'
import dbconnect from "../helpers/dbconnect"
export class DiscussionsCard extends Component {
    render(props) {
        return (
            <div className="discussioncard">
                <img src="profilepic.jpg"></img>
                <h1>{this.props.postedBy}</h1>
                <p>{this.props.quest}</p>
                <div>
                <span className="likes">
                    Likes <img src="like.png"></img>: {this.props.likes}   
                </span>
                <span className="anslength">
                    Ans : {this.props.ans.length}
                </span>
                </div>
            </div>
        )
    }
}

export default DiscussionsCard
