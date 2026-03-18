import express from 'express'

import Artwork from '../models/Artwork.js'

import requireLogin from '../middleware/requireLogin.js'

const router = express.Router()


// Student dashboard
router.get('/', requireLogin, async (req, res) => {
  const artworks = await Artwork.find()
  res.render('artist/dashboard', { artworks })
})

// View artwork page
router.get('/artwork/:id', requireLogin, async (req, res) => {
  const artwork = await Artwork.findById(req.params.id)

  res.render('artist/artwork', {
    artwork

  })

})


// Save visit notes
router.post('/college/:id', requireLogin, async (req, res) => {
  const { notes, interested } = req.body;

  res.redirect('/student')
})

// Student profile page
router.get('/profile', requireLogin, async (req, res) => {


  res.render('artist/profile', {
    
  })
})

export default router