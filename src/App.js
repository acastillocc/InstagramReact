import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Stories from "./components/Stories";
import Post from "./components/Post";
import InfoPersona from "./components/InfoPersona";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { firebase } from "./components/firebase";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  });

  if (isUserSignedIn === true) {
    return (
      <Router>
        <Routes>
         
          <Route exact path="/" element={[<Header/>,, <InfoPersona />,<Stories />,<Post />, <Post />, <Post />, <Post />, <Post />]}>
          </Route>
           
           
        </Routes>
      </Router>
    );
  } else {
    return (
      <div>
      <Home/>
      </div>
    );
  }
}

export default App;
