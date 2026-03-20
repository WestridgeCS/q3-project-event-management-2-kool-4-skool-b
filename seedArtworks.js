import mongoose from "mongoose"
import dotenv from "dotenv"
import Artwork from "./models/Artwork.js"
import Artist from "./models/Artist.js"
dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")


await Artwork.deleteMany({})
console.log("Old artworks cleared")

const alex = await Artist.findOne({ artistId: "alex1" })
const sarah = await Artist.findOne({ artistId: "sarahN" })
const jim = await Artist.findOne({ artistId: "jimtim" })
const rachel = await Artist.findOne({ artistId: "racquette" })
const amanda = await Artist.findOne({ artistId: "amandapanda" })

const artworks = [

    {
      title: "Exploration of Human Form",
      creator: alex._id,
      materials:"Oils on canvas",
      desc: "A deep exploration of the human form using abstract figures and bright colors",
      display: true,
      originalName: "explorationOfHumanForm.jpg",
      originalFile: "explorationOfHumanForm.jpg",
      thumbFile: "explorationOfHumanForm.jpg",
      largeFile: "explorationOfHumanForm.jpg"
    },

    {
      title: "Depth",
      creator: alex._id,
      materials:"Oils on canvas",
      desc: "A vibrant painting exploring the idea that 'eyes are the window to the soul' as the painting seems to depict an unending depth within the pupil.",
      display: true,
      originalName: "depth.webp",
      originalFile: "depth.webp",
      thumbFile: "depth.webp",
      largeFile: "depth.webp"
    },

    {
      title: "Self Portrait with Pastels",
      creator: alex._id,
      materials:"Oil pastels on canvas",
      desc: "A vibrant self portrait, Ramirex depicts himself standing infront of a potted plant. This is likely a reference to his upbrining with gardeners.",
      display: true,
      originalName: "selfPortraitWithPastels.jpg",
      originalFile: "selfPortraitWithPastels.jpg",
      thumbFile: "selfPortraitWithPastels.jpg",
      largeFile: "selfPortraitWithPastels.jpg"
    },

    {
      title: "86",
      creator: alex._id,
      materials:"Oils and pastels on canvas",
      desc: "The painting depicts 86 cats playing in a bring field. All is peaceful.",
      display: true,
      originalName: "86.webp",
      originalFile: "86.webp",
      thumbFile: "86.webp",
      largeFile: "86.webp"
    },

    {
      title: "Smile #4",
      creator: alex._id,
      materials:"Oils on canvas, metal",
      desc: "A darker departure from his normal work, this piece is part of his 'Smile' series. The smile in this painting shows Ramirez's struggles with mental health.",
      display: true,
      originalName: "smile4.jpg",
      originalFile: "smile4.jpg",
      thumbFile: "smile4.jpg",
      largeFile: "smile4.jpg"
    },

    {
      title: "Fish in a Barrel",
      creator: sarah._id,
      materials:"Colored pencils on printer paper",
      desc: "A swimming freely in a large pond. The water is clear and there is only one fish in the pond. This juxtaposition of the title and painting leads one to wonder what it could mean.",
      display: true,
      originalName: "fishInBarrell.jpg",
      originalFile: "fishInBarrell.jpg",
      thumbFile: "fishInBarrell.jpg",
      largeFile: "fishInBarrell.jpg"
    },

    {
      title: "Moon Over the Euphrates",
      creator: sarah._id,
      materials:"Crayons on cardboard",
      desc: "Despite the cheap materials, Nguyen was able to create a beautifully rendered landscape of the moon shining high above the Euphrates River.",
      display: true,
      originalName: "moonOverEuphrates.jpg",
      originalFile: "moonOverEuphrates.jpg",
      thumbFile: "moonOverEuphrates.jpg",
      largeFile: "moonOverEuphrates.jpg"
    },

    {
      title: "Railroad 3",
      creator: sarah._id,
      materials:"Charcoal on canvas",
      desc: "A still scene with only a railroad surrounded by grass. There are no people or trains within it, the piece is serene yet eerie in it's stillness.",
      display: true,
      originalName: "railroad3.jpg",
      originalFile: "railroad3.jpg",
      thumbFile: "railroad3.jpg",
      largeFile: "railroad3.jpg"
    },

    {
      title: "Gary",
      creator: jim._id,
      materials:"Graphite on paper",
      desc: "Gary is a figure featured prominently in Tallow's works, sometimes front and center, usually in the background. This is one of the clearest images of Gary in Tallow's art. If Tallow's claims are true, one is left to wonder who Gary is.",
      display: true,
      originalName: "gary.jpg",
      originalFile: "gary.jpg",
      thumbFile: "gary.jpg",
      largeFile: "gary.jpg"
    },

    {
      title: "Look Ahead",
      creator: jim._id,
      materials:"Graphite on paper",
      desc: "According to Tallow, this piece depicts one of his first visions. At this point in his career had primarily been working with acrylic paints, but this piece marks a distinct shift in his style. According to Tallow he started using the graphite because, 'it pleased him.'",
      display: true,
      originalName: "lookAhead.webp",
      originalFile: "lookAhead.webp",
      thumbFile: "lookAhead.webp",
      largeFile: "lookAhead.webp"
    }

]


await Artwork.insertMany(artworks)

console.log("Artworks seeded successfully")

mongoose.connection.close()