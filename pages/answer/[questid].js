import { useRouter } from "next/router"


const answer = ()=>{
    const router = useRouter()
    const {questid} = router.query 
    return (
        <>
        <div className="mt-20">
            Hello {questid}
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
    console.log(data)

    return{
        props:{
            answer:data
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