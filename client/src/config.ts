const environment = process.env.NODE_ENV

// Development mode configuration (default)
let apiUrl = process.env.REACT_APP_API_URL_DEV
let usersUrl = process.env.REACT_APP_USERS_URL_DEV
let domain = process.env.REACT_APP_DOMAIN_DEV

if (environment === 'production'){
    // production mode configuration
    apiUrl = process.env.REACT_APP_API_URL_PROD
    usersUrl = process.env.REACT_APP_USERS_URL_PROD
    domain = process.env.REACT_APP_DOMAIN_PROD
}

export { environment, apiUrl, usersUrl, domain }