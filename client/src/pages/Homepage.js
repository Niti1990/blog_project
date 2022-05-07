import React from 'react'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

const url = 'http://localhost:5000'
const api = '/api/articles'

const Homepage = () => {
	console.log('I am the Homepage!')
	const [articles, setArticles] = useState()
	useEffect(() => {
		axios.get(`${url}${api}`).then(response => setArticles(response.data))
	}, [])

	return (
		<ul>
			{articles.map(article => (
				<li key={article.id}>
					<h2 id={article.id}>{article.title}</h2>
				</li>
			))}
		</ul>
	)
}

export default Homepage
