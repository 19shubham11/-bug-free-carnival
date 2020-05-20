const serverOptions = {}
const fastify = require('fastify')(serverOptions)

const PORT = 2020

fastify.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

fastify.get('/hello/:id', (req, res) => {
    const id = req.params.id
    console.log('id', id)
    const response = {hello: 'wow, such json'}
    res.send(response)
})

fastify.post('/easy', (req, res) => {
    const { body } = req
    console.log('body', body.question)

    res.send('Success!!!').code(201)
})
    