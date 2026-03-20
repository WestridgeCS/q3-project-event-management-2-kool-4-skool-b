import express from 'express'
import Artwork from '../models/Artwork.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const artworks = await Artwork.find({ display: true }).populate('creator')
  res.render('guest/gallery', { artworks })
})

router.get('/gallery/artwork/:id', async (req, res) => {
  const artwork = await Artwork.findOne({
    _id: req.params.id,
    display: true
  }).populate('creator')

  if (!artwork) {
    return res.status(404).send('Artwork not found')
  }

  res.render('guest/artwork', { artwork })
})

export default router