// form to post questions

import { parseCookies } from "nookies"


const askForm = ()=>{


    const askQuest = async(e)=>{
        e.preventDefault()
        const res = await fetch('http://localhost:3000/login',{
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
        <div className="container-fluid ask-div">
            <form className="" action="/ask" method="post" onSubmit={(e)=>askQuest(e)}>
            <div className="form-group mb-0.5;">
                <label for="exampleFormControlTextarea1" className="ask">Ask your doubts here!</label>
                <textarea placeholder="Type your Question here" className="form-control h-100px;" name="quest" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" className="bg-blue-200">Ask</button>

            </form>
        </div>
    )
}

export default askForm

export async function getServerSideProps(ctx){
    const cookieUser = parseCookies(ctx)
    // const User = cookieUser.user ? JSON.parse(cookieUser.user) : ""

    console.log(cookieUser);

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