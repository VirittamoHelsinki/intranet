require('dotenv').config()

const environment = process.env.NODE_ENV

const port = process.env.PORT

const domain_key = process.env.DOMAIN_KEY

const users_url = process.env.USERS_URL_DEV

module.exports = {
    environment,
    port,
    domain_key,
    users_url
}