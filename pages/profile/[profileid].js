import React, { Component } from 'react'

export class profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        return (
            <div>
                This is an individual profile page
            </div>
        )
    }
}

export default profile
// export async function getStaticProps({params})
// {
//     const res = await fetch(`http://localhost:3000/api/answer/${params.questid}`, {
//         method:"GET",
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })

//     const data = await res.json()

//     return{
//         props:{
//             question:data
//         }
//     }

// }

export async function getStaticPaths()
{
    const res = await fetch('http://localhost:3000/api/findAllUsers',{
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
    return{
        paths,
        fallback: false
    }
}