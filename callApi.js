
const axios = require('axios')

/**
 * @title callApi
 * @category callApi
 * @author Vitória.
 */
const callApi = async () => {
  
  // We call the Github API
  console.log(event.preview)
  const { data } = await axios.post('https://us-central1-projetobot-f0fd6.cloudfunctions.net/apiResponse/',{cep:event.preview})

  // We assign the response to the session variable so we can use it later
  session.response = data
  
}

// Actions are async, so make sure to return a promise
return callApi()