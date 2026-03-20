export default function requireLogin(req, res, next) {
  if (!req.session.artistId) {
    return res.redirect('/login')
  }
  next()
}