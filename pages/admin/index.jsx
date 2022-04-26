import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Admin.module.css"

const index = ( { articles }) => {
    const [articleList, setArticleList] = useState(articles);
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("http://localhost:3000/api/articles/"+id)
            setArticleList(articleList.filter((article) => article._id !== id));
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.article}>
                <h1 className={styles.title}>Articles</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </tbody>
                        {articleList.map(article => (
                            <tbody>
                                <tr className={styles.trTitle}>
                                    <td>{article._id.slice(0, 5)}...</td>
                                    <td>{article.title}</td>
                                    <td>{article.description}</td>
                                    <td>
                                        <button className={styles.button}>Edit</button>
                                        <button className={styles.button} onClick={() => handleDelete(article._id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
            </div>
        </div>
    )
};

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3000/api/articles");
  
    return {
      props: {
        articles: res.data
      }
    }
  }
export default index;

