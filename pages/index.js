// import Layout from "../components/layout";
import Link from "next/link"
const Home = ()=>{
    // console.log(users)

    return(
      <div className=" justify-center flex flex-col mt-40 w-full">
        <h1 className="guidinghometext">Guiding Light</h1>
        <div className="flex justify-center flex-row mt-8">
        <Link href="/discussion"><a className="homepageask">Go To Discussions</a></Link>
        <Link href="/ask"><a className="homepageask">Ask a Question</a></Link>
        </div>
        <div className="homeabout">
          <h1>We Respect Every Query</h1>
          <h2>Get all your queries solved by your peers.</h2>
        </div>
      </div>
    )
}

export default Home

// export async function getStaticProps(){
//   const res = await fetch('http://localhost:3000/api/posts');
//   const data = await res.json()

//   return{
//     props:{
//       users : data
//     }
//   }
// }