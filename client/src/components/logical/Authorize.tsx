// node module imports
import { useEffect } from 'react'
import Cookies from 'universal-cookie'

// file imports
import authorizeApi from '../../api/authorize'
import useStore from '../../store/store'
import { usersUrl } from '../../config'

const Authorize = () => {
    const { setUser, user } = useStore()
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const service_key: string | null  = urlParams.get("service_key")
    console.log('service_key ------>', service_key)

    const cookies = new Cookies()

    useEffect(() => {
        loadTokenFromCookies()
        
        if (service_key) getAuthorization()
    }, [])

    const getAuthorization = async () => {
        try {
        
        // Exchange the service_key for a token.
        const token = await authorizeApi.getToken(service_key)
        
        // Save the token as a cookie.
        cookies.set('portalToken', token, {
            // Cookie expires in 60 days.
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60),
            path: '/',
        })

        setUser(await authorizeApi.getUser())

        } catch (error) { console.log(error) }
    }

    const loadTokenFromCookies = async () => {
        const portalToken = cookies.get('portalToken')
    
        if (portalToken) {
    
          // Initialize the user state with the token from the cookie.
          authorizeApi.setToken(portalToken)
    
          try {
            // Load user information from the server.
            setUser(await authorizeApi.getUser())
          
          } catch (error) {
            // If the token is invalid, remove it from the cookie.
            cookies.remove('portalToken')
          }
        }
    }

    const logout = async () => {
        await authorizeApi.logout()
        cookies.remove('portalToken')
        setUser(null)
    }


    if (user) return <a onClick={logout}>logout</a>
    
    return <a href={usersUrl}>login</a>
}

export default Authorize