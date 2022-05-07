import express from 'express'
import Article from '../models/article.js'

const router = express.Router()

// All routes
router.get('/articles', (req, res) => {
	Article.find({}, (error, data) => {
		if (error) {
			res.status(400).send('no articles found')
		}
		res.json(data)
	})
})

//single route
router.get('/articles/:id', (req, res) => {
  const { id } = req.params;
  Article.findById(id, (error, data) => {
		if (error) {
			res.status(400).send('no articles found')
		}
		res.json(data)
	})
})

//post all articles
router.post('/articles', (req, res) => {})
//post single article
router.post('/articles/:id', (req, res) => {})


export default router
