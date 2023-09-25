require('dotenv').config()

const environment = process.env.NODE_ENV

const port = process.env.PORT

const service_key = process.env.SERVICE_KEY

const users_url = process.env.USERS_URL_DEV

module.exports = {
    environment,
    port,
    service_key,
    users_url
}