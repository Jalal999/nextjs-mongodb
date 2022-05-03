import { useState } from "react"
import styles from "../styles/Add.module.css"
import axios from "axios"
import { useRouter } from "next/dist/client/router"
import article from "../pages/article/[id]"

const Edit = ({setClose, article, articles}) => {
    const [title, setTitle] = useState(null)
    const [articleList, setArticleList] = useState(articles);
    const [description, setDescription] = useState(null)

    const handleUpdate = async () => {
        console.log(article)
        try {
            const newArticle = { title, description };
            await axios.put("http://localhost:3000/api/articles/"+article._id, newArticle);
            // const articlesClone = [...articleList]
            // const index = articlesClone.indexOf(article)
            // articlesClone[index] = {...newArticle}
            // setArticleList(articlesClone)
            setClose(true)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={()=>setClose(true)} className={styles.close}>X</span>
                <h1>Add a new Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Article title</label>
                    <input type="text" className={styles.input} onChange={(e)=> setTitle(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Give description</label>
                    <textarea rows={4} type="text" className={styles.input} onChange={(e)=> setDescription(e.target.value)} />
                </div>
                <button className={styles.addButton} onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const myCookie = context.req?.cookies || "";
    
    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect:{
                destination: "/admin/login",
                permanent: false,
            }
        }
    }

    const res = await axios.get("http://localhost:3000/api/articles");
  
    return {
      props: {
        articles: res.data
      }
    }
  }

export default Edit