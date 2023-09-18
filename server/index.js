// npm imports
const express = require('express')
const path = require('path')

// local imports
const {
    requestLogger, unknownEndpoint, errorHandler, logger
} = require('./middleware/middlewares')
const { port, environmentMode } = require('./utils/config')
const authorizeRouter = require('./controllers/authorizeRouter')

const app = express()

// Apply middlewares that need to be added before the routes.
if (environmentMode === 'development') app.use(require('cors')())
app.use(express.json())
app.use(express.static('build'))
app.use(requestLogger)

app.get('/api', (req, res) => {
    res.status(200).send('<h4> The API starts here. </h4>')
})

app.use('/api/authorize', authorizeRouter)

// Apply middlewares that need to be added after the routes.
app.use('/api/*', unknownEndpoint)
app.use(errorHandler)

// Directs requests that dont match any of the routes previously
// defined to the frontend.
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.listen(port, () => {
    logger.info(`intranet-portal server running on port: ${port}`)
  })