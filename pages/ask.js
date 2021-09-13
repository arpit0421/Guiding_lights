// form to post questions

import { parseCookies } from "nookies"


const askForm = ()=>{


    const askQuest = async(e)=>{
        e.preventDefault()
        const res = await fetch('http://localhost:3000/api/ask',{
            method:"POST",
            headers:{
                "Content-Type":"aplication/json"
            },
            body: JSON.stringify({
                quest,
                
            })
        })

    }

    return(
        <div className="container-fluid ask-div flex justify-center">
            <form className="" action="/ask" method="post" onSubmit={(e)=>askQuest(e)}>
            <div className="form-group mb-0.5;">
                <h1 className="ask">Ask your doubts here!</h1>
                <textarea placeholder="Type your Question here" className="form-control h-100px p-3" name="quest" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" className="bg-blue-200">Ask</button>

            </form>
        </div>
    )
}

export default askForm

export async function getServerSideProps(ctx){
    const cookieUser = parseCookies(ctx)
    const User = cookieUser.user ? JSON.parse(cookieUser.user) : ""
    // const router = useRouter()
    // console.log(User)
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