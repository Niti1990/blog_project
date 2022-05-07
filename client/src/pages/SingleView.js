import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const url = 'http://localhost:5000'

const SingleView = () => {
  const { id } = useParams()
  const api = `/api/articles/${id}`
  const [article, setArticle] = useState({})

  axios.get(`${url}${api}`).then(response => setArticle(response.data))

  return (
    <main className="uk-flex-auto uk-section">
      <article className="uk-container uk-container-xsmall uk-background-default uk-box-shadow-small">
        <header>
          <header>
          <h1 className="uk-article-title">{article.title}</h1>
          <figure>
            <img src={article.cover} alt="" />
          </figure>
        </header>
        </header>
        <div>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}

export default SingleView
