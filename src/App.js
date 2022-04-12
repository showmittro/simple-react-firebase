import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }
  return (
    <div className="App">

      {
        user.uid ? <button onClick={handleSingOut}>Sing OUt</button>
          :
          <div>
            <button onClick={handleGoogleSingIn}>google sing in</button>
            <button onClick={handleGithubSingIn}>Github Sing In</button>
          </div>
        //other system not use div: <> </>

      }
      <h2>User Name: {user.displayName}</h2>
      <p>your email: {user.email}</p>
    </div>
  );
}

export default App;
