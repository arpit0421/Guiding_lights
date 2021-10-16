
import { useRouter } from 'next/router'

const profile = (props)=>{

    return(
        <div>
            <h1>this is user profile page</h1>
        </div>
    )
}

export default profile

export async function getStaticProps()
{
    const router = useRouter()
    const {profileid} = router.query
    
    console.log(profileid)
    const res = await fetch(`http://localhost:3000/api/profile/${profileid}`, {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })

    const data = await res.json()
    console.log(data)

    return{
        props:{
            user: data
        }
    }
}

export async function getStaticPaths(){

    const paths = ["613cfc49cc265d4d5e51ae6f", "613f6e880cfffff928c59169", "613f6b1f0cfffff928c59162"]

    

    return{
        paths,
        fallback: false
    }
}