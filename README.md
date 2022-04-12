# Project Name: Simple React Firebase

Live site link: https://simple-react-firebase.netlify.app/ 


# steps (11) to use Firebase:-

- create a project on console.firebase.google.com
- npm install firebase
- register web app in firebase
- copy firebase init with config from firebase project setting
- export default app from firebase.init.js
- import app firebase init.js into your project app.js
- import getAuth from firebase/auth and create auth = getAuth app
- turn on google Authentication =>
 (firebase> authentication > enable google sing in)
- create google provider
- use singInWithPopup and pass auth and provider
- handel .then(if successful) and .catch error (if error).