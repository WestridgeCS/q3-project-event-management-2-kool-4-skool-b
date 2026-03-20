import express from 'express'
import Artwork from '../models/Artwork.js'
import Artist from '../models/Artist.js'
import requireLogin from '../middleware/requireLogin.js'

const router = express.Router()

//Load up the artist dashboard
router.get('/', requireLogin, async (req, res) => {
  const artworks = await Artwork.find({ creator: req.session.artistId })
  res.render('artist/dashboard', { artworks })
})
//Load up the artworks
router.get('/artwork/:id', requireLogin, async (req, res) => {
  const artwork = await Artwork.findOne({
    _id: req.params.id,
    creator: req.session.artistId
  }).populate('creator')

  if (!artwork) {
    return res.status(404).send('Artwork not found')
  }

  res.render('artist/artwork', { artwork })
})
//Load up the artist profile
router.get('/profile', requireLogin, async (req, res) => {
  const artist = await Artist.findById(req.session.artistId)
  res.render('artist/profile', { artist })
})

export default router