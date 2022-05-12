import { useState } from "react"
import styles from "../../styles/Add.module.css"
import axios from "axios"
import { useRouter } from "next/dist/client/router"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { CloseIcon, Item } from "./ModalStyle"


const Add = ({setClose}) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const handleCreate = async () => {
        try {

            const newArticle = { title, description };
            await axios.post("http://localhost:3000/api/articles", newArticle);
            setClose(true)
        } catch(err) {
            console.log(err)
        }
    }

    const handleClose = () => {
        setClose(true)
    }

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseIcon onClick={()=>setClose(true)}>X</CloseIcon>
                <h1>Add a new Article</h1>
                <Item>
                    <TextField id="outlined-basic" label="Article Title" variant="outlined" onChange={(e)=> setTitle(e.target.value)} />
                </Item>
                <Item>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue="Article Description" 
                        onChange={(e)=> setDescription(e.target.value)} 
                    />
                </Item>
                <Button variant="outlined" size="small" onClick={handleCreate}>
                    Create
                </Button>
            </Box>
        </Modal>
    )
}

export default Add