import { useRouter } from "next/router"


const answer = ()=>{
    const router = useRouter()
    const {questid} = router.query 
    return (
        <><h1>This is a answers page for particular answer {questid}</h1> </>
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

    // console.log(paths)

    return{
        paths,
        fallback: false
    }
}