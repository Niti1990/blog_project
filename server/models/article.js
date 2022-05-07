import mongoose from 'mongoose'
const { Schema } = mongoose

const ArticleSchema = new Schema({
	title: String,
	body: String,
	description: String,
})
const Article=mongoose.model("Article", ArticleSchema)
export default Article
