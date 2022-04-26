import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config'
import axios from "axios"

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}


// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/articles");

  return {
    props: {
      articles: res.data
    }
  }
}