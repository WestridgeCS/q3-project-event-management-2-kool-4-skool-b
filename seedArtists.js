import mongoose from "mongoose"
import dotenv from "dotenv"

import User from "./models/Artist.js"
import Artist from "./models/Artist.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)

console.log("Connected to MongoDB")

// Clear existing students
await User.deleteMany({ role: "artist" })
await Artist.deleteMany({ role: "artist" })

console.log("Old artists removed")


const artists = [

{
  name: "Alex Ramirez",

  email: "alex.r@art.com",
  passwordHash: null,
  bio:"Born in the US, Aleex Ramirez had been making art from a young age. Early on in his career, Ramirez primarily worked with pencils and watercolors. While he was studying in Italy, Ramirez discovered oil paints. Since then, he hasn't looked back. Ramirez's work is known for bright colors and abstract shapes, blending modern aesthetics with traditional painting techniques.",
  portfolio:"",
  role: "student"
},

{
  name: "Sarah Nguyen",
  email: "sarah.n@art.com",
  passwordHash: null,
  bio:"Known for her beautiful and sofisticated works using childish materials, Sarah Nguyen has received international acclaim for her ",
  portfolio:"",
  role: "student"
},

{
  name: "Jim Tallow",
  email: "jim.t@art.com",
  passwordHash: null,
  bio:"",
  portfolio:"",
  role: "student"
},

{
  name: "Rachel Torres",
  email: "rachel.t@art.com",
  passwordHash: null,
  bio:"",
  portfolio:"",
  role: "student"
},

{
  name: "Amanda Hill",
  email: "amanda.h@art.com",
  passwordHash: null,
  bio:"",
  portfolio:"",
  role: "student"
}


]


await User.insertMany(artists)

console.log("Artists seeded successfully")

mongoose.connection.close()