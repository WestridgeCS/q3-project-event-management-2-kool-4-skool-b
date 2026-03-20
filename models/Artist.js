import mongoose from "mongoose"

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true },
  artistId: { type: String, unique: true, sparse: true, trim: true },
  passwordHash: { type: String },
  role: {
    type: String,
    enum: ["artist", "admin"],
    default: "artist"
  },
  bio: { type: String, default: "" },
  portfolio: { type: String, default: "" },
})

export default mongoose.model("Artist", artistSchema)