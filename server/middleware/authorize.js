const jwt = require('jsonwebtoken')

const getTokenFrom = (req) => {
  const authorization = req.get('authorization')

  // 'remove "bearer " from the beginning of the string'
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }

  return null
}

const requireAuthorization = async (req, res, next) => {
  try {
    const token = getTokenFrom(req)
    let decodedToken = null

    console.log('token:', token)

    decodedToken = jwt.verify(token, process.env.SECRET)
    
    if (!token || !decodedToken.email) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }
  
    res.locals.user = {
        email: decodedToken.email
    }

    next()

  } catch (exception) {
    if (exception.name === 'JsonWebTokenError') {
      
      return res.status(401).json({ error: exception.message })
    } else {
      console.log(exception)

      return res.status(500).json({
        error: 'something went wrong during the authorization check...'
      })
    }
  }
}

module.exports = {
  requireAuthorization
}