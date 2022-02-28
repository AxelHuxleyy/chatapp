const jwt = require("jsonwebtoken")
require('dotenv').config({ path: 'variables.env' })


module.exports = createToken = (user, expiresIn) => {
  const token = jwt.sign({...user}, process.env.SECRETA, {expiresIn})
  return token

}