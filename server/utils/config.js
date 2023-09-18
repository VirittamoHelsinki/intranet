require('dotenv').config()

const environmentMode = process.env.NODE_ENV

const port = process.env.PORT

const secret = process.env.SECRET

const domain_key = process.env.DOMAIN_KEY

module.exports = {
    port,
    secret,
    domain_key,
    environmentMode
}