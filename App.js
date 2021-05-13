import './App.css';
import Home from './components/Home'
import Bid from './components/Bid'
import Holbogdoh from './components/Holbogdoh'
import Bugd from './components/Bugd'
import Hymdral from './components/Hymdral'
import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./Login";
import Hero from './Hero';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/"><Home /></Route>
        <Route  path="/bid"><Bid /></Route>
        <Route  path="/holbogdoh"><Holbogdoh /></Route>
        <Route  path="/bugd"><Bugd /></Route>
        <Route  path="/Hymdral"><Hymdral /></Route>

       
      </Switch>
    </BrowserRouter>
  );

const App = () => {
     const [ user, setUser ] = useState('');
     const [ email, setEmail ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ emailError, setEmailError ] = useState('');
     const [ passwordError, setPasswordError ] = useState('');
     const [ hasAccount, setHasAccount ] = useState(false);

     const clearInputs = () => {
       setEmail('');
       setPassword('');
     }
     const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
     }

     const handleLogin = () => {
       clearErrors();
       fire
         .auth()
         .signInWithEmailAndPassword(email, password)
         .catch((err) => {
           switch (err.code) {
             case "auth/invaild.email":
             case "auth/user-disabled":
             case "auth/user-not-fount":
               setEmailError(err.message);
               break;
             case "auth/wrong.password":
               setPasswordError(err.massage);
               break;

           }
         });
     };
     const handleSignup = () => {
      clearErrors();
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invaid-email":
            setEmailError(err.message);
            break;
          case "auth/wrong.password":
            setPasswordError(err.message);
            break;

        }
      });
     };

     const handleLogout = () => {
       fire.auth().signOut();
     };

     const authListener = () => {
      fire.auth().onAuthStateChanged((user)=> {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
      });
     };

     useEffect(() => {
      authListener();
     }, []);

     return (
       <div className="App">
         {user ? (
           <Hero handleLogout={handleLogout} />
         ) : (
         <Login 
         email={email}
         setEmail={setEmail}
         password={password}
         setPassword={setPassword}
         handleLogin={handleLogin}
         handleSignup={handleSignup}
         hasAccount={hasAccount}
         setHasAccount={setHasAccount}
         emailError={emailError}
         passwordError={passwordError}
         />
         )}
         
         
       </div>
     );
};
}

export default App;