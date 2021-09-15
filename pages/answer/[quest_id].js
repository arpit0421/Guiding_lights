import { useRouter } from "next/router"
import question from "../../models/question"

const answer = ()=>{
   
    // console.log(questId)
    return(
        <h1>This is the answers page for paricular answer </h1>
    )
    
}

export default answer

export async function getStaticPaths(){
    
    const res = await fetch('http://localhost:3000/api/discussion',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()

    const paths = data.map(ques=>{
        return{
            params : {id : ques._id.toString()}
        }
    })

    console.log(paths)

    return{
        paths,
        fallback: true
    }

}

export async function getStaticProps(cxt){

    const Quest_id = cxt.params.id
    // const res = await fetch('http://localhost:3000/api/discussion',{
    //     method:"GET",
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // })
    // const data = await res.json()

    const ans = await question.findOne({_id : Quest_id})
    ans = ans.answer

    console.log(Quest_id)
    return{
        props:{}
    }
}