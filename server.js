const http = require('http')
const host_name = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Ara\n')
})

server.listen(port, host_name, () => {
  console.log('Server Running!')
})
