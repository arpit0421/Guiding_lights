import { useRouter } from "next/router"

import DiscussionsCard from "../../components/DiscussionsCard"
const answer = ({question})=>{
    const router = useRouter()
    const {questid} = router.query 
    return (
        <>
        <div className="mt-20">
            <DiscussionsCard key={question._id} quest={question.quest} postedByName = {question.postedByName}
                    ans={question.answer} likes = {question.likes} _id={question._id} onDiscussions={false}/>
        </div>
        </>
    )
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