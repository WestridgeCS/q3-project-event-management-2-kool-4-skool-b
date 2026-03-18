import express from 'express'

import Artwork from '../models/Artwork.js'
import Visit from '../models/Visit.js'

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

  const visit = await Visit.findOne({
    student: req.session.userId,
    artwork: req.params.id
  })

  res.render('student/artwork', {
    artwork,
    visit
  })

})


// // Save visit notes
// router.post('/college/:id', requireLogin, async (req, res) => {
//   const { notes, interested } = req.body

//   let visit = await Visit.findOne({
//     student: req.session.userId,
//     college: req.params.id
//   })

//   if (!visit) {
//     visit = new Visit({
//       student: req.session.userId,
//       college: req.params.id
//     })
//   }

//   visit.notes = notes
//   visit.interested = interested === 'on'

//   await visit.save()

//   res.redirect('/student')
// })

// Student profile page
router.get('/profile', requireLogin, async (req, res) => {
  const visits = await Visit
    .find({ student: req.session.userId })
    .populate('college')

  res.render('student/profile', {
    visits
  })
})

export default router