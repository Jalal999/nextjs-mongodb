// import articleStyles from '../../styles/Article.module.css'
import Link from 'next/link'
import { Title, Description } from './ArticleItemStyle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const ArticleItem = ({ article }) => {
    return (
        <Link href={`/article/${article._id}`} passHref>
            <a>
            <Card>
                <CardContent>
                    <Title>{article.title} &rarr;</Title>
                    <Description>{article.description}</Description>
                </CardContent>
            </Card>
            </a>
        </Link>
    )
}

export default ArticleItem