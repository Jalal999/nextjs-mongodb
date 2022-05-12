import articleStyles from '../../styles/Article.module.css'
import ArticleItem from '../ArticleItem'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ArticleCard } from './ArticleListStyle'


const ArticleList = ({ articles }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {articles.map((article) =>
                <Grid key={article._id} item xs={6}>
                    <ArticleItem article={article}/>
                </Grid>
                )}
            </Grid>
        </Box>
        
    )
};

export default ArticleList