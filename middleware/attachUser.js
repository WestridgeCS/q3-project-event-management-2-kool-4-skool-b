import Artist from "../models/Artist.js"

export default async function attachArtist(req, res, next) {

  // default values so EJS never crashes
  res.locals.currentArtist = null
  res.locals.role = null

  if (!req.session.artistId) {
    return next()
  }

  try {

    const artist = await Artist.findById(req.session.artistId)

    res.locals.currentArtist = artist
    res.locals.role = req.session.role

  } catch (err) {
    console.error(err)
  }

  next()
}