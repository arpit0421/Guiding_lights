// form to post questions
const askForm = ()=>{


    const askQuest = async(e)=>{
        
    }

    return(
        <div class="container-fluid ask-div" className=" ">
            <form class="" action="/ask" method="post" onSubmit={(e)=>askQuest(e)}>
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