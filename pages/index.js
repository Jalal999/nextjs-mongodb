import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config'
import axios from "axios"
import { useState } from 'react'
import AddButton from '../components/AddButton'
import Add from '../components/Add'

export default function Home({ articles, admin }) {
  const [close, setClose] = useState(true)
  
  return (
    <div>
      {admin && <AddButton setClose={setClose} />}
      {!close && <Add setClose={setClose} /> }
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

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || ""
  let admin = false;
  
  if(myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  
  const res = await axios.get("http://localhost:3000/api/articles");

  return {
    props: {
      articles: res.data,
      admin
    }
  }
}