import mongoose from "mongoose"

const artSchema = new mongoose.Schema({
  title: String,
  creator:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Artist",
  },
  desc:String,
  display:Boolean,

})

export default mongoose.model("Artwork",artSchema)