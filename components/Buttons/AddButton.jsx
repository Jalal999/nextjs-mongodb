import styles from "../../styles/Add.module.css"
import Button from '@mui/material/Button';

const AddButton = ({setClose}) => {
    return <Button variant="contained" onClick={() => setClose(false)}>Add New Article</Button>
}

export default AddButton;