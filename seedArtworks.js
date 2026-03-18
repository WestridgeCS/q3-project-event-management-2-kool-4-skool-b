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
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
title: "Depth",
creator: "Alex Ramirez",
materials:"Oils on canvas",
desc: "A vibrant painting exploring the idea that 'eyes are the window to the soul' as the painting seems to depict an unending depth within the pupil.",
iconPath: "/uploads/collegeIcons/usc.png"
},

{
title: "Self Portrait with Pastels",
creator: "Alex Ramirez",
materials:"Oil pastels on canvas",
desc: "A vibrant self portrait, Ramirex depicts himself standing infront of a potted plant. This is likely a reference to his upbrining with gardeners.",
iconPath: "/uploads/collegeIcons/stanford.png"
},

{
title: "86",
creator: "Alex Ramirez",
materials:"Oils and pastels on canvas",
desc: "The painting depicts 86 cats playing in a bring field. All is peaceful.",
iconPath: "/uploads/collegeIcons/caltech.png"
},

{
title: "Smile #4",
creator: "Alex Ramirez",
materials:"Oils on canvas, metal",
desc: "A darker departure from his normal work, this piece is part of his 'Smile' series. The smile in this painting shows Ramirez's struggles with mental health.",
iconPath: "/uploads/collegeIcons/pomona.png"
},

{
title: "Fish in a Barrel",
creator: "Sarah Nguyen",
materials:"Colored pencils on printer paper",
desc: "asdfghjnkml,;.;';lkjhgfd",
iconPath: "/uploads/collegeIcons/hmc.png"
},

{
title: "Moon Over the Euphrates",
creator: "Sarah Nguyen",
materials:"Crayons on cardboard",
desc: "Liberal arts college focused on economics, government, and leadership.",
iconPath: "/uploads/collegeIcons/cmc.png"
},

{
title: "Railroad 3",
creator: "Sarah Nguyen",
materials:"Charcoal on canvas",
desc: "Claremont college known for interdisciplinary studies and social justice.",
iconPath: "/uploads/collegeIcons/pitzer.png"
},

{
title: "Gary",
creator: "Jim Tallow",
materials:"Graphite on paper",
desc: "Women's liberal arts college within the Claremont Colleges consortium.",
iconPath: "/uploads/collegeIcons/scripps.png"
},

{
title: "Look Ahead",
creator: "Jim Tallow",
materials:"Graphite on paper",
desc: "Flagship UC campus with strong research and engineering programs.",
iconPath: "/uploads/collegeIcons/berkeley.png"
},

{
title: "Exploration of Colors",
creator: "Jim Tallow",
materials:"Acrylics on canvas",
desc: "Research university known for science, medicine, and oceanography.",
iconPath: "/uploads/collegeIcons/ucsd.png"
},

{
title: "Practice with Persimmons",
creator: "Jim Tallow",
materials:"Graphite on paper",
desc: "UC campus known for agriculture, environmental science, and veterinary medicine.",
iconPath: "/uploads/collegeIcons/ucdavis.png"
},

{
title: "Rocking Your Roll",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Coastal UC campus with strong programs in physics and engineering.",
iconPath: "/uploads/collegeIcons/ucsb.png"
},

{
title: "Never Again",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Private research university in New York City with global campuses.",
iconPath: "/uploads/collegeIcons/nyu.png"
},

{
title: "LOOK AT ME",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Ivy League university located in New York City.",
iconPath: "/uploads/collegeIcons/columbia.png"
},

{
title: "go away",
creator: "Rachel Torres",
materials:"Watercolor on paper",
desc: "Research university known for economics and intellectual rigor.",
iconPath: "/uploads/collegeIcons/chicago.png"
},

{
title: "Game On",
creator: "Rachel Torres",
materials:"Acrylics on canvas",
desc: "Private research university in North Carolina with strong athletics and academics.",
iconPath: "/uploads/collegeIcons/duke.png"
},

{
title: "Numeric",
creator: "Amanda Hill",
materials:"Ceramics and metal",
desc: "Research university near Chicago known for journalism and business.",
iconPath: "/uploads/collegeIcons/northwestern.png"
},

{
title: "Numeral",
creator: "Amanda Hill",
materials:"Ceramics and metal",
desc: "Ivy League university known for its open curriculum.",
iconPath: "/uploads/collegeIcons/brown.png"
},

{
title: "Numerology",
creator: "Amanda Hill",
materials:"Cermanics and metal",
desc: "Ivy League university with strengths in engineering and agriculture.",
iconPath: "/uploads/collegeIcons/cornell.png"
},

{
title: "Numb",
creator: "Amanda Hill",
materials:"Ceramics and metal",
desc: "Ivy League university known for law, humanities, and residential college system.",
iconPath: "/uploads/collegeIcons/yale.png"
}

]


await Artwork.insertMany(artworks)

console.log("Artworks seeded successfully")

mongoose.connection.close()