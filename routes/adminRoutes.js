import express from 'express'

import Artist from '../models/Artist.js'
import Artwork from '../models/Artwork.js'

import requireLogin from '../middleware/requireLogin.js'
import requireAdmin from '../middleware/requireAdmin.js'

const router = express.Router()

// import multer from "multer"
// import path from "path"

// const storage = multer.diskStorage({
//   destination: (req,file,cb)=>{
//     cb(null,"uploads/collegeIcons")
//   },

//   filename: (req,file,cb)=>{
//     cb(null, Date.now() + path.extname(file.originalname))
//   }
// })

// const upload = multer({ storage })

router.get('/', requireLogin, requireAdmin, (req, res) => {
  res.render('admin/dashboard')
})

router.get('/artist', requireLogin, requireAdmin, async (req, res) => {
  const artists = await Artist.find({ role: 'artist' })
  res.render('admin/artists', { artists })
})

router.get('/artwork', requireLogin, requireAdmin, async (req, res) => {
  const artworks = await Artwork.find().populate('creator')
  res.render('admin/artworks', { artworks })
})

router.get('/admin/artist/:id', requireLogin, requireAdmin, async (req, res) => {
  const artist = await Artist.findById(req.params.id)
  const artworks = await Artwork.find({ creator: req.params.id })

  if (!artist) {
    return res.status(404).send('Artist not found')
  }

  res.render('admin/artistDetail', { artist, artworks })
})

router.get('/admin/artist/new', requireLogin, requireAdmin, (req,res)=>{
  res.render('admin/newArtist')
})

router.get('/admin/artist/:id/edit', requireLogin, requireAdmin, async (req,res)=>{
  const artist = await Artist.findById(req.params.id)

  if (!artist) {
    return res.status(404).send('Artist not found')
  }

  res.render('admin/editArtist', { artist })
})

router.post('/artwork/:id/delete', requireLogin, requireAdmin, async (req,res)=>{
  await Artwork.findByIdAndDelete(req.params.id)
  res.redirect('/admin/artwork')
})

export default router