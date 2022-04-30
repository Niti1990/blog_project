import mongoose from 'mongoose'
const { Schema } = mongoose

const Article = new Schema({
	title: String,
	body: String,
	description: String,
})

export default Article
