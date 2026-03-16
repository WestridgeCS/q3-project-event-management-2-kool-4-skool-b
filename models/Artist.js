import mongoose from "mongoose"

const artistSchema = new mongoose.Schema({
  name:String,
  email:String,
  passwordHash:String,
  role:{
    type:String,
    enum:["artist","admin"]
  },
  bio:String,
  portfolio:String,
})

export default mongoose.model("Artist",artistSchema)