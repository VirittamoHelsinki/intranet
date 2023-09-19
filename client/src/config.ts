const environment = import.meta.env.NODE_ENV
console.log(environment)

// Development mode configuration (default)
let apiUrl:string = import.meta.env.API_URL_DEV
let usersUrl:string = import.meta.env.USERS_URL_DEV
let domain:string = import.meta.env.DOMAIN_DEV

if (environment === 'production'){
    // production mode configuration
    apiUrl = import.meta.env.API_URL_PROD
    usersUrl = import.meta.env.USERS_URL_PROD
    domain = import.meta.env.DOMAIN_PROD
}

export { environment, apiUrl, usersUrl, domain }