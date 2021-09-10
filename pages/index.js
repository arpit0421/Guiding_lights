// import Layout from "../components/layout";

const Home = ()=>{
    // console.log(users)

    return(
      <div className="container bg-green-500 mx-auto my-auto">
        <h1>This is a Home Page</h1>
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