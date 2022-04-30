import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  Article.find({}, (error, data) => {
    if (error) {
      res.status(400).send('no articles found')
    }
    res.json(data)
  })
})

export default router
