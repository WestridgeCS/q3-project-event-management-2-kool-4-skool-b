import express from 'express'

import Artist from '../models/Artist.js'
import Artwork from '../models/Artwork.js'

import requireLogin from '../middleware/requireLogin.js'

const router = express.Router()


// Public Gallery 
router.get('/', requireLogin, async (req, res) => {
  const artists = await Artist.find()
  res.render('student/dashboard', { artist })
})

// View specific artist page
router.get('/artist/:id', async (req, res) => {
  const artist = await Artist.findById(req.params.id)

  const artwork = await Artwork.findOne({
    artist: req.session.userId,
    artwork: req.params.id
  })

  res.render('student/college', {
    artist,
    artwork
  })

})


// Save visit notes
router.post('/college/:id', requireLogin, async (req, res) => {
  const { notes, interested } = req.body

  let visit = await Visit.findOne({
    student: req.session.userId,
    college: req.params.id
  })

  if (!visit) {
    visit = new Visit({
      student: req.session.userId,
      college: req.params.id
    })
  }

  visit.notes = notes
  visit.interested = interested === 'on'

  await visit.save()

  res.redirect('/student')
})

// Artist login page to their profile
router.get('/profile', requireLogin, async (req, res) => {
  const visits = await Visit
    .find({ student: req.session.userId })
    .populate('college')

  res.render('student/profile', {
    visits
  })
})

export default router