import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Layout from "./components/InstagramLayout/Layout";
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
          <Route  path="/" element={<Layout />}></Route>
        </Routes>
      </Router>
    );
  } else {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
