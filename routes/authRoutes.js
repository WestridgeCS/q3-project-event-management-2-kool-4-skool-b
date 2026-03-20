import express from 'express'
import bcrypt from 'bcrypt'
import Artist from '../models/Artist.js'

const router = express.Router()

//Default login page
router.get('/', (req, res) => {
  res.redirect('/login')
})
//Authenticated Login
router.get('/login', (req, res) => {
  res.render('auth/login')
})
//Login Page for Artists
router.post('/login/artist', async (req, res) => {
  const { name, artistId } = req.body

  const artist = await Artist.findOne({
    name,
    artistId,
    role: 'artist'
  })

  if (!artist) {
    return res.redirect('/login')
  }

  req.session.artistId = artist._id
  req.session.role = 'artist'

  res.redirect('/artist')
})
//Login Page for Admin
router.post('/login/admin', async (req, res) => {
  const { email, password } = req.body

  const admin = await Artist.findOne({
    email,
    role: 'admin'
  })

  if (!admin || !admin.passwordHash) {
    return res.redirect('/login')
  }
  //Compare passwords for authentication
  const valid = await bcrypt.compare(password, admin.passwordHash)

  if (!valid) {
    return res.redirect('/login')
  }

  req.session.artistId = admin._id
  req.session.role = 'admin'

  res.redirect('/admin')
})
//Logout for Everybody
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login')
  })
})

router.get('/admin/register', (req, res) => {
  if (req.query.token !== process.env.ADMIN_INVITE_TOKEN) {
    return res.status(403).send("Unauthorized")
  }

  res.render('auth/registerAdmin', {
    token: req.query.token
  })
})
//Make an Admin
router.post('/admin/register', async (req, res) => {
  if (req.body.token !== process.env.ADMIN_INVITE_TOKEN) {
    return res.status(403).send("Unauthorized")
  }

  const { name, email, password } = req.body

  const existing = await Artist.findOne({ email })

  if (existing) {
    return res.send("Admin already exists with that email.")
  }

  const hash = await bcrypt.hash(password, 10)

  const admin = new Artist({
    name,
    email,
    passwordHash: hash,
    role: "admin"
  })

  await admin.save()

  res.redirect('/login')
})

export default router