import { useRouter } from "next/router"
import question from "../../models/question"
import { Mongoose } from "mongoose"

const answer = (props)=>{
    
    console.log(props)
    // console.log(questId)
    return(
        <h1>This is the answers page for paricular answer </h1>
    )
    
}

export default answer

export async function getStaticProps({params}){

    const res = await fetch(`http://localhost:3000/api/answer/${params.id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()

    return{
        props:{answer: data}
    }
}


export async function getStaticPaths(){
    
    const res = await fetch('http://localhost:3000/api/discussion',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()
    // console.log(data[0]);
    const paths = data.map(ques=>{
        return{
            params : {id : ques._id}
        }
    })

    console.log(paths)

    return{
        paths,
        fallback: true
    }

}
