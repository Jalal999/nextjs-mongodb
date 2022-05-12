import axios from "axios";
import { useState } from "react";
import Edit from "../../components/Modals/Edit";
import styles from "../../styles/Admin.module.css"
import Button from '@mui/material/Button';


const index = ( { articles }) => {
    const [articleList, setArticleList] = useState(articles);
    const [close, setClose] = useState(true)


    const handleDelete = async (id) => {
        try {
            const res = await axios.delete("http://localhost:3000/api/articles/"+id)
            setArticleList(articleList.filter((article) => article._id !== id));
        } catch(err) {
            console.log(err)
        }
    }

    const handleEdit = async (article) => {
        setClose(false)

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
                                {!close && <Edit setClose={setClose} article={article} /> }
                                <tr className={styles.trTitle}>
                                    <td>{article._id.slice(0, 5)}...</td>
                                    <td>{article.title}</td>
                                    <td>{article.description}</td>
                                    <td>
                                        <Button variant="contained" color="success" onClick={() => handleEdit(article)}>Edit</Button>
                                        <Button variant="outlined" color="error" onClick={() => handleDelete(article._id)}>Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
            </div>
        </div>
    )
};

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
export default index;

