const http = require('http')
const URL = require('url')

const port = 2021

const server = http.createServer((req, res) => {

    console.log('req>', req)

    const {url: path, method} = req
    const {pathname} = URL.parse(path)
    
    console.log(method, pathname)

    if (path === '/' && method === 'GET') {
        res.write(JSON.stringify({
            tm: 'Say hello to my little friend'
        }))
    }

    if (path === '/who' && method === 'GET') {
        res.write(JSON.stringify({
            tm: 'who put this together?'
        }))
    }

    if (path === '/why' && method === 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body+=chunk
        })

        req.on('end', () => {
            console.log('body', body)
            const jsonBody = JSON.parse(body)
            console.log('question', jsonBody.question)
        })

        res.write(JSON.stringify({
            tm: 'fdgfdgdfgf'
        }))

        res.statusCode = 201
    }
    res.end()
})

server.listen(port, () => {
    console.log('working!!')
})
