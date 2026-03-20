import mongoose from "mongoose"

const artSchema = new mongoose.Schema({
  title: String,
  creator:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Artist",
  },
  materials: String,
  desc:String,
  display:Boolean,
  originalName: { type: String, required: true, trim: true },

  // // stored filenames (no paths)
  // originalFile: { type: String, required: true, trim: true },
  // thumbFile: { type: String, required: true, trim: true },
  // largeFile: { type: String, required: true, trim: true },

  // // optional image info (nice for “details” panel)
  // width: { type: Number },
  // height: { type: Number },

  // originalBytes: { type: Number },
  // thumbBytes: { type: Number },
  // largeBytes: { type: Number },
})

export default mongoose.model("Artwork",artSchema)
