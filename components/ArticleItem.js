import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({ article }) => {
    return (
        <Link href={`/article/${article._id}`} passHref >
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.description}</p>
            </a>
        </Link>
    )
}

export default ArticleItem