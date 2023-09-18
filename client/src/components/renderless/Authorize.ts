// node module imports
// import { useEffect, useState } from 'react'
// import { useSearchParams, useNavigate } from 'react-router-dom'
// import Cookies from 'universal-cookie'

// // file imports
// import authorizeApi from '../../api/authorize'
// import useStore from '../../store/store'

// const cookies = new Cookies()

// const Authorize = () => {
//     const { setUser } = useStore()

//     const navigate = useNavigate()

//     const [searchParams] = useSearchParams()

//     const service_key: string | null = searchParams.get("service_key")

//     const getAuthorization = async () => {

//         try {
        
//         // Exchange the service key for a token.
//         const token = await authorizeApi.getToken(service_key)
        
//         navigate('/')
        
//         // Save the token as a cookie.
//         cookies.set('portalToken', token, {
//             // Cookie expires in 60 days.
//             expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60),
//             path: '/',
//           })

        
//         const u = await authorizeApi.getUser()

//         setUser(u)

//         } catch (error) { console.log(error) }
//     }

//     useEffect(() => {
//         if (service_key) getAuthorization()
//     }, [])

//     return null
// }

// export default Authorize