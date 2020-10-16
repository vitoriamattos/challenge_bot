const functions = require('firebase-functions');
const admin = require('firebase-admin');

// var serviceAccount = require("path/to/serviceAccountKey.json");

// Initialize the app with a null auth variable, limiting the server's access
admin.initializeApp();

exports.addEmail = functions.https.onRequest((req, res) => {
// [END addMessageTrigger]
  const email = req.body.email;
  console.log(req.body)
  admin.firestore().collection('contatos').add({email: email}).then(writeResult => {
    res.json({result: `Email added.`});
  });
});

exports.apiResponse = functions.https.onRequest((request, response)  => {
  const url = `https://viacep.com.br/ws/${request.body.cep}/json/`
 console.log(request.body)
 try{
  const axios = require('axios');
  axios.get(url).then(r => {
   
    response.send(r.data);
  }).catch( e => {
    console.log(e)
    response.sendStatus(e);
  })
 } catch(e){
   console.log(e)
 }
});

