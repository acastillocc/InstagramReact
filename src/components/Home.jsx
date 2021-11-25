import React, { useState, useEffect } from "react";
import celulares from "../images/celulares.png";
import logo from "../images/instagram.png";
import { firebase } from "./firebase";
// import { BsGoogle } from "react-icons/bs";

const Home = () => {
  const [user, setUser] = useState("empty");
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user.displayName);
      } else {
        setUser("");
      }
    });
  }, []);

  const SignInWithFirebase = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((re) => {
        console.log(re.user.displayName);
        setUser(re.user.displayName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _stylesHome = {
    content: {
      display: "flex",
      backgroundColor: "#FAFAFA",
      padding: "0px 25px 0px 25px",
      height: "100vh",
    },

    phones: {
      display: "flex",
      padding: "50px 23px 0px 70px",
      justifyContent: "flex-end",
      height: "600px",
      width: "45%",
    },

    login: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      border: "thin solid #DBDBDB",
      marginTop: "200px",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
      height: "230px",
      borderRadius: "2px",
    },

    loginButton: {
      width: "80%",
      height: "15%",
      marginTop: "20px",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#0095F6",
      fontWeight: "bold",
      color: "white",
      cursor: "pointer",
    },

    footer: {
      display: "flex",
      position: "static",
      bottom: "3px",
      alignItems: "center",
      justifyContent: "space-between",
      width:"30%",
      height:"10%",
      color: "gray",
      fontSize: "12px",
      textAlign: "center",
      cursor: "pointer"
      
    },
  };

  if (user === 'empty') return <></>;

  if (user) {
    console.log({user})
  }

  return (
    <div className="content" style={_stylesHome.content}>
      <div className="phones" style={_stylesHome.phones}>
        <img src={celulares} alt="celulares" width="370" height="580" />
      </div>

      <div className="login" style={_stylesHome.login}>
        <img src={logo} alt="logo" width="182" height="70" />
        <button
          className="loginButton"
          onClick={SignInWithFirebase}
          style={_stylesHome.loginButton}
        >
          {/* <BsGoogle size={15} /> */}
          Iniciar sesión con Google
        </button>
      </div>

      {/* <div className="footer" style={_stylesHome.footer}>
        Meta
        Información
        Blog
        Ayuda
        API
        Privacidad
        Condiciones
        Cuentas destacadas
        Hashtags
        Ubicaciones
      </div> */}

    </div>
  );
};

export default Home;
