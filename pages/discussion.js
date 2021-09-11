// fetch & display all the quesions with their author and date, likes, answers etc
//
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import Link from 'next/link'
const discussion = ()=>{

    return(
        <div><h1>This is a Discussion a page</h1></div>
    )
}

export default discussion

export async function getServerSideProps(ctx){
    const cookieUser = parseCookies(ctx)
    const User = cookieUser.user ? JSON.parse(cookieUser.user) : ""
    // const router = useRouter()
    console.log(User)
    if(!cookieUser.token){
        // router.push("/login")
        const {res} = ctx
        res.writeHead(302, {location:"/login"})
        res.end()
    }

    return{
        props:{}
    }
}