const environment = import.meta.env.MODE
console.log('environment:', import.meta.env)

// Development mode configuration (default)
let apiUrl:string = import.meta.env.VITE_API_URL_DEV
let usersUrl:string = import.meta.env.VITE_USERS_URL_DEV
let domain:string = import.meta.env.VITE_DOMAIN_DEV

if (environment === 'production'){
    // production mode configuration
    apiUrl = import.meta.env.VITE_API_URL_PROD
    usersUrl = import.meta.env.VITE_USERS_URL_PROD
    domain = import.meta.env.VITE_DOMAIN_PROD
}

export { environment, apiUrl, usersUrl, domain }