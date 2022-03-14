import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    name: String,
    blog: String,
});

export default mongoose.model('blogs', blogSchema)