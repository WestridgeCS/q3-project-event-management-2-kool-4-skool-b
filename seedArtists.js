import mongoose from "mongoose"
import dotenv from "dotenv"
<<<<<<< HEAD

=======
>>>>>>> 7bb0a3aec6c44638f58e20859c3ec80fe29f8d0c
import User from "./models/Artist.js"
import Artist from "./models/Artist.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)

console.log("Connected to MongoDB")

// Clear existing students
await Artist.deleteMany({ role: "artist" })

console.log("Old artists removed")


const artists = [

{
  name: "Alex Ramirez",

  email: "alex.r@art.com",
  passwordHash: null,
  bio:"Born in the US, Aleex Ramirez had been making art from a young age. Early on in his career, Ramirez primarily worked with pencils and watercolors. While he was studying in Italy, Ramirez discovered oil paints. Since then, he hasn't looked back. Ramirez's work is known for bright colors and abstract shapes, blending modern aesthetics with traditional painting techniques.",
  portfolio:"https://en.wikipedia.org/wiki/Oil_paint",
  role: "artist"
},

{
  name: "Sarah Nguyen",
  email: "sarah.n@art.com",
  passwordHash: null,
  bio:"Known for her beautiful and sofisticated works using childish materials, Sarah Nguyen has received international acclaim for her creative uses of materials, as well as her bold explorations of what makes something sophisticated. Nguyen says that her goal is to show that materials don't matter, rather it's what is done with those materials that creates value.",
  portfolio:"https://en.wikipedia.org/wiki/Crayon",
  role: "artist"
},

{
  name: "Jim Tallow",
  email: "jim.t@art.com",
  passwordHash: null,
  bio:"Claiming to be cursed with visions of a dark future, Jim Tallow vents his feelings of helplessness through his art. Tallow says he paints his visions. These painting often depict bloody scenes with mutilated people and cities turned to rubble. While none of his visions have come to pass, one can only wonder if Tallow's claims are true.",
  portfolio:"https://en.wikipedia.org/wiki/Prophecy",
  role: "artist"
},

{
  name: "Rachel Torres",
  email: "rachel.t@art.com",
  passwordHash: null,
  bio:"Known for painting soft dreamscapes, Rachel Torres uses her medium to it's maximum potential. Torres uses a method of blending colors that creates a soft and fuzzy feeling that not many are able to replicate. Her blending works in tandem with her palette of pastels to give her pieces a comforting and somewhat nostalgic feeling.",
  portfolio:"https://en.wikipedia.org/wiki/Watercolor_painting",
  role: "artist"
},

{
  name: "Amanda Hill",
  email: "amanda.h@art.com",
  passwordHash: null,
  bio:"Amanda Hill focuses on sharp angles, perfect lines, and symmetry. She uses math to sculpt perfect shapes, claiming that perfection is found within numbers. While some may find her attitude unsettling, many can say that her statues have an almost ethereal feeling, making it difficult to look away.",
  portfolio:"https://en.wikipedia.org/wiki/Modern_sculpture",
  role: "artist"
}


]


await User.insertMany(artists)

console.log("Artists seeded successfully")

mongoose.connection.close()