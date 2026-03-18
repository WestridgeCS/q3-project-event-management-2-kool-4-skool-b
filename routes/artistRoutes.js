import express from 'express'

import Artwork from '../models/Artwork.js'

import requireLogin from '../middleware/requireLogin.js'

const router = express.Router()


// Artist dashboard
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


  res.render('artist/profile', {
    
  })
})

export default router