import mongoose from "mongoose"
import dotenv from "dotenv"
import Artwork from "./models/Artwork.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")


await Artwork.deleteMany({})
console.log("Old artworks cleared")


const artworks = [

{
title: "Exploration of Human Form",
creator: "Alex Ramirez",
materials:"Oils on canvas",
desc: "A deep exploration of the human form using abstract figures and bright colors",
iconPath: "/uploads/collegeIcons/explorationOfHumanForm.jpg"
},

{
title: "Depth",
creator: "Alex Ramirez",
materials:"Oils on canvas",
desc: "A vibrant painting exploring the idea that 'eyes are the window to the soul' as the painting seems to depict an unending depth within the pupil.",
iconPath: "/uploads/collegeIcons/depth.webp"
},

{
title: "Self Portrait with Pastels",
creator: "Alex Ramirez",
materials:"Oil pastels on canvas",
desc: "A vibrant self portrait, Ramirex depicts himself standing infront of a potted plant. This is likely a reference to his upbrining with gardeners.",
iconPath: "/uploads/collegeIcons/selfPortraitWithPastels.jpg"
},

{
title: "86",
creator: "Alex Ramirez",
materials:"Oils and pastels on canvas",
desc: "The painting depicts 86 cats playing in a bring field. All is peaceful.",
iconPath: "/uploads/collegeIcons/86.webp"
},

{
title: "Smile #4",
creator: "Alex Ramirez",
materials:"Oils on canvas, metal",
desc: "A darker departure from his normal work, this piece is part of his 'Smile' series. The smile in this painting shows Ramirez's struggles with mental health.",
iconPath: "/uploads/collegeIcons/smile4.jpg"
},

{
title: "Fish in a Barrel",
creator: "Sarah Nguyen",
materials:"Colored pencils on printer paper",
desc: "A swimming freely in a large pond. The water is clear and there is only one fish in the pond. This juxtaposition of the title and painting leads one to wonder what it could mean.",
iconPath: "/uploads/collegeIcons/fishInBarrell.jpg"
},

{
title: "Moon Over the Euphrates",
creator: "Sarah Nguyen",
materials:"Crayons on cardboard",
desc: "Despite the cheap materials, Nguyen was able to create a beautifully rendered landscape of the moon shining high above the Euphrates River.",
iconPath: "/uploads/collegeIcons/moonOverEuphrates.jpg"
},

{
title: "Railroad 3",
creator: "Sarah Nguyen",
materials:"Charcoal on canvas",
desc: "A still scene with only a railroad surrounded by grass. There are no people or trains within it, the piece is serene yet eerie in it's stillness.",
iconPath: "/uploads/collegeIcons/railroad3.jpg"
},

{
title: "Gary",
creator: "Jim Tallow",
materials:"Graphite on paper",
desc: "Gary is a figure featured prominently in Tallow's works, sometimes front and center, usually in the background. This is one of the clearest images of Gary in Tallow's art. If Tallow's claims are true, one is left to wonder who Gary is.",
iconPath: "/uploads/collegeIcons/gary.jpg"
},

{
title: "Look Ahead",
creator: "Jim Tallow",
materials:"Graphite on paper",
desc: "According to Tallow, this piece depicts one of his first visions. At this point in his career had primarily been working with acrylic paints, but this piece marks a distinct shift in his style. According to Tallow he started using the graphite because, 'it pleased him.'",
iconPath: "/uploads/collegeIcons/lookAhead.webp"
},

{
title: "Exploration of Colors",
creator: "Jim Tallow",
materials:"Acrylics on canvas",
desc: "One of Tallow's pieces from before he received 'visions.' His style is distinct in how he does not blend paints on the canvas, and instead chooses to mix transition shades. He shows a true mastery over the medium, which is why his sudden shift to using graphite and pencils is so strange.",
iconPath: "/uploads/collegeIcons/explorationOfColors"
},

{
title: "Practice with Persimmons",
creator: "Jim Tallow",
materials:"Graphite on paper",
desc: "Persimmons are a common motif in his current works, often with persimmon trees in the background or characters eating persimmons. When asked what they meant, Tallow simply stated, 'he likes persimmons.'",
iconPath: "/uploads/collegeIcons/practiceWithPersimmons"
},

{
title: "Rocking Your Roll",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Coastal UC campus with strong programs in physics and engineering.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "Never Again",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Private research university in New York City with global campuses.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "LOOK AT ME",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Ivy League university located in New York City.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "go away",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Research university known for economics and intellectual rigor.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "Game On",
creator: "Rachel Torres",
materials:"Acrylics on canvas",
desc: "Private research university in North Carolina with strong athletics and academics.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "Numeric",
creator: "Amanda Hill",
materials:"Ceramics and metal",
desc: "Research university near Chicago known for journalism and business.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "Numeral",
creator: "Amanda Hill",
materials:"Ceramics and metal",
desc: "Ivy League university known for its open curriculum.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "Numerology",
creator: "Amanda Hill",
materials:"Cermanics and metal",
desc: "Ivy League university with strengths in engineering and agriculture.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
},

{
title: "Numb",
creator: "Amanda Hill",
materials:"Ceramics and metal",
desc: "Ivy League university known for law, humanities, and residential college system.",
iconPath: "/uploads/collegeIcons/placeHolder.png"
}

]


await Artwork.insertMany(artworks)

console.log("Artworks seeded successfully")

mongoose.connection.close()