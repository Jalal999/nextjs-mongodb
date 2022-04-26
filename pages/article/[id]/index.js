import { useRouter } from "next/router"
import Link from "next/dist/client/link"
import { server } from "../../../config"
import axios from "axios"

const article = ({ article }) => {
    // const router = useRouter();
    // const {id} = router.query

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <br />

            <Link href='/'>Go Back</Link>
        </>
    )
}


export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/articles/${params.id}`);
  
    return {
      props: {
        article: res.data
      }
    }
  }


// export const getServerSideProps = async (context) => {
//     const res = await fetch(`${server}/api/articles/${context.params.id}`)
//     const article = await res.json();

//     return {
//         props: {
//             article: article
//         }
//     }
// }

// export const getStaticProps = async (context) => {
//     const res = await fetch(`${server}/api/articles/${context.params.id}`)
  
//     const article = await res.json()
  
//     return {
//       props: {
//         article,
//       },
//     }
//   }
  
//   export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/articles`)
  
//     const articles = await res.json()
  
//     const ids = articles.map((article) => article.id)
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
//     return {
//       paths,
//       fallback: false,
//     }
//   }

export default article