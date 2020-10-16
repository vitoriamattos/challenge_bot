
const axios = require('axios')

/**
 * @title addEmail
 * @category addEmail
 * @author Vitória.
 */
const addEmail = async () => {
  
  // We call the Github API
  const { data } = await axios.post('https://us-central1-projetobot-f0fd6.cloudfunctions.net/addEmail ',{email:event.preview})

  // We assign the response to the session variable so we can use it later
  session.response = data
  
}

// Actions are async, so make sure to return a promise
return addEmail()