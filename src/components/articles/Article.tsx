import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { ArticleInterface } from '../../types/article.interface'
import { fetchArticle } from '../../api'
import { Link } from 'react-router'
import { useLocation } from 'react-router'

const Article = () => {
  const [article, setArticle] = useState<ArticleInterface | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams()
  const { sortQuery } = useLocation().state;

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const articleData = await fetchArticle(Number(id))
        setArticle(articleData)
        setError(null)
      }
      catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [id])

  console.log('🧩 article:', article)
  console.log('⚠️ error:', error)
  console.log('⏳ isLoading:', isLoading)

  return (
    <div>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && article && (
        <>
          <h1>{article.title}</h1>
          <hr />
          <h3>{article.id}</h3>
          <h3>{article.slug}</h3>
          <hr />
          <p>{article.body}</p>
          <div>
            <Link to={`../..${sortQuery}`} relative="path">
              All articles
            </Link>
          </div>
        </>
      )
      }
      <h1>Article</h1>
    </div >
  )
}

export default Article
