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
                This is an individual profile page {this.props.profile.name} {this.props.profile.department} {this.props.profile.email}

            </div>
        )
    }
}

export default profile

export async function getStaticProps({params})
{
    const res = await fetch(`http://localhost:3000/api/profile/${params.profileid}`, {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    const data = await res.json()

    return{
        props:{
            profile:data
        }
    }

}

export async function getStaticPaths()
{
    const res = await fetch('http://localhost:3000/api/findAllUsers',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()
    // console.log(data)
    const paths = data.map(profile=>{
        return{
            params:{profileid: profile._id.toString()}
        }
    })
    console.log(paths)
    return{
        paths,
        fallback: false
    }
}