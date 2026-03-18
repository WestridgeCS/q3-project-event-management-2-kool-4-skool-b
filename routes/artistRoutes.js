import express from 'express'

import Artwork from '../models/Artwork.js'

import requireLogin from '../middleware/requireLogin.js'

const router = express.Router()


// Artist dashboard
router.get('/', requireLogin, async (req, res) => {
  const artworks = await Artwork.find()
  res.render('student/dashboard', { artworks })
})

// View artwork page
router.get('/artwork/:id', requireLogin, async (req, res) => {
  const artwork = await Artwork.findById(req.params.id)

  res.render('student/artwork', {
    artwork,
  })

})

// Artist profile page
router.get('/profile', requireLogin, async (req, res) => {
  
  res.render('student/profile')
  
})

export default router