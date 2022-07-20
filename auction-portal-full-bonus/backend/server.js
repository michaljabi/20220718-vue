const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('backend/fake-db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/users/log-in', (req, res) => {
  const { email, password } = req.body
  if (email === 'john@email.com' && password === '1234') {
    return res.json({ token: 's0me4uthT0ken' })
  }
  res.status(401).json({ error: 'Not authorized' })
})

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
