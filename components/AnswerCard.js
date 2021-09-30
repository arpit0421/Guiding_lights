import React, { Component } from 'react'

export class AnswerCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="answercard">
                <h1>{this.props.name}</h1>
                <p className=" break-words">{this.props.answer}</p>
            </div>
        )
    }
}

export default AnswerCard
