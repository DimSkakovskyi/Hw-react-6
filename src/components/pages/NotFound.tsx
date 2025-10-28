import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/articles')
    }, 5000)
  }, [navigate])

  return (
    <div className="content-center">
      <h1 className="not-found">NotFound</h1>
      <div className="link-xl">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default NotFound
