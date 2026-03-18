import express from 'express'

import Artist from '../models/Artist.js'
import Artwork from '../models/Artwork.js'

import requireLogin from '../middleware/requireLogin.js'
import requireAdmin from '../middleware/requireAdmin.js'

const router = express.Router()

import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"uploads/collegeIcons")
  },

  filename: (req,file,cb)=>{
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

// Admin dashboard
router.get('/admin', requireLogin, requireAdmin, (req, res) => {
  res.render('admin/dashboard')
})

// Admin dashboard of all artists
router.get('/admin/artist', requireLogin, requireAdmin, async (req, res) => {
  const artists = await Artist.find()

  res.render('admin/colleges', { artists })
})


// Admin dashboard of all artworks
router.get('/admin/artist/artwork', requireLogin, requireAdmin, async (req, res) => {
  const artist = await Artist.find({ role: 'artist' })
  const data = []

  for (let artist of artists) {
    const artworks = await Artwork
      .find({ artwork: artwork._id })
      .populate('college')

    const interested = visits.filter(v => v.interested)

    data.push({
      student,
      visitCount: visits.length,
      interested
    })

  }

  res.render('admin/students', { data })
})

// Artist detail page
router.get('/artist/:id', requireLogin, requireAdmin, async (req, res) => {
  const artist = await Artist.findById(req.params.id)

  const artwork = await Artwork
    .find({ student: req.params.id })
    .populate('college')

  res.render('admin/studentDetail', {
    student,
    visits
  })
})

// GET - Add a new artist
router.get('/admin/artist/new', requireLogin, requireAdmin, (req,res)=>{
  res.render('admin/newCollege')
})

// GET - Edit an artist page
router.get('/admin/artist/:id', requireLogin, requireAdmin, async (req,res)=>{
  const artist = await Artist.findById(req.params.id)
  res.render('admin/editCollege',{college})
})

// POST - Add a new artwork
router.post('/artwork/new', requireLogin, requireAdmin, upload.single("icon"), async (req,res)=>{
  const {
    name,
    repName,
    repEmail,
    repPhone,
    website,
    notes
  } = req.body

  const college = new College({
    name,
    repName,
    repEmail,
    repPhone,
    website,
    notes
  })

  if (req.file) {
    college.iconPath = "/uploads/collegeIcons/" + req.file.filename
  }

  await college.save()

  res.redirect("/admin/colleges")
})

// POST - Edit an artwork
router.post('/artwork/:id', requireLogin, requireAdmin, upload.single("icon"), async (req,res)=>{
  const artwork = await Artwork.findById(req.params.id)

  college.name = req.body.name
  college.repName = req.body.repName
  college.repEmail = req.body.repEmail
  college.repPhone = req.body.repPhone
  college.website = req.body.website
  college.notes = req.body.notes

  if (req.file) {
    college.iconPath = "/uploads/collegeIcons/" + req.file.filename
  }

  await college.save()

  res.redirect("/admin/colleges")
})

// Delete an artwork
router.post('/artwork/:id/delete', requireLogin, requireAdmin, async (req,res)=>{
  await Artwork.findByIdAndDelete(req.params.id)
  res.redirect("/admin/colleges")
})

export default router