import { useState } from "react"
import styles from "../styles/Add.module.css"
import axios from "axios"
import { useRouter } from "next/dist/client/router"

const Add = ({setClose}) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)

    const handleCreate = async () => {
        try {

            const newArticle = { title, description };
            await axios.post("http://localhost:3000/api/articles", newArticle);
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
                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    )
}

export default Add