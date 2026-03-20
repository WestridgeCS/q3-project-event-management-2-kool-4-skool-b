export default function requireAdmin(req, res, next) {
  if (req.session.role !== 'admin') {
    return res.status(403).send('Forbidden')
  }
  next()
}