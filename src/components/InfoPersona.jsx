import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";

const InfoPersona = () => {
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
  const [user, setUser] = useState("");
  const [usuario2, setUsuario2] = useState("none");
  const [usuario1, setUsuario1] = useState("none");

  const LogOut = () => {
    firebase.auth().signOut();
    setUser("");
    console.log({ user });
  };

  const _stylesPersona = {
    container: {
      display: "flex",
      position: "fixed",
      right: "290px",
      marginTop: "40px",
      width: "300px",
      height: "240px",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      zIndex: "20",
    },

    miPerfil: {
      position: "relative",
      display: "flex",
      width: "690px",
      height: "60px",
    },

    fotoPerfil: {
      width: "19%",
      height: "90%",
      margin: "5px",
      borderRadius: "50px",
      backgroundImage: "url(https://picsum.photos//90/75)",
      cursor: "pointer",
    },

    usuarioContent: {
      display: "flex",
    },

    names: {
      display: "grid",
      width: "65%",
      height: "100%",
      paddingLeft: "8px",
      alignContent: "center",
    },
    miUsuario: {
      display: "flex",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
    },

    miNombre: {
      display: "flex",
      fontWeight: "400",
      fontSize: "14px",
      color: "#8E8E8E",
    },

    cerrarSesion: {
      display: "flex",
      width: "18%",
      height: "100%",
      fontSize: "13px",
      fontWeight: "600",
      alignItems: "center",
      justifyContent: "flex-end",
      color: "#38ACF7",
      cursor: "pointer",
    },

    sugerenciasContainer: {
      display: "flex",
      position: "absolute",
      top: "60px",
      paddingLeft: "5px",
      alignContent: "center",
      justifyContent: "space-between",
      width: "98.5%",
      height: "20%",
    },

    sugerencias: {
      display: "flex",
      color: "#8E8E8E",
      width: "100%",
      height: "50%",
      paddingTop: "13px",
      fontWeight: "600",
      fontSize: "14px",
      justifyContent: "space-between",
    },

    verTodo: {
      display: "flex",
      width: "35%",
      height: "78%",
      fontWeight: "600",
      fontSize: "12px",
      justifyContent: "flex-end",
      alignItems: "center",
      cursor: "pointer",
    },

    sugUsersContainer: {
      display: "flex",
      position: "absolute",
      top: "97px",
      width: "100%",
      height: "20%",
    },

    fotoPerfil2: {
      display: "flex",
      width: "12%",
      height: "70%",
      margin: "5px",
      borderRadius: "50px",
      backgroundImage: "url(https://picsum.photos//90/70)",
      cursor: "pointer",
    },

    fotoPerfil3: {
      display: "flex",
      position: "relative",
      top: "50px",
      width: "12%",
      height: "70%",
      margin: "5px",
      borderRadius: "50px",
      backgroundImage: "url(https://picsum.photos//90/71)",
      cursor: "pointer",
    },

    sugUser: {
      display: "grid",
      width: "90%",
      height: "90%",
      paddingLeft: "10px",
      alignContent: "center",
      fontWeight: "600",
      fontSize: "14px",
      textDecoration: `${usuario1}`,
      cursor: "pointer",
    },
    sugUser2: {
      display: "grid",
      position: "relative",
      top: "50px",
      width: "90%",
      height: "90%",
      paddingLeft: "10px",
      alignContent: "center",
      fontWeight: "600",
      fontSize: "14px",
      textDecoration: `${usuario2}`,
      cursor: "pointer",
    },
  };
  return (
    <div className="infoPersona" style={_stylesPersona.container}>
      <div className="miPerfil" style={_stylesPersona.miPerfil}>
        <div className="foto" style={_stylesPersona.fotoPerfil}></div>
        <div className="names" style={_stylesPersona.names}>
          <div style={_stylesPersona.miUsuario}>miusuario</div>
          <div style={_stylesPersona.miNombre}>{user}</div>
        </div>
        <div
          className="cerrarSesion"
          onClick={LogOut}
          style={_stylesPersona.cerrarSesion}
        >
          Log Out
        </div>
      </div>
      <div style={_stylesPersona.sugerenciasContainer}>
        <div className="sugerencias" style={_stylesPersona.sugerencias}>
          Sugerencias para ti
        </div>
        <div style={_stylesPersona.verTodo}>Ver todo</div>
      </div>

      <div className="sugerenciaUsers" style={_stylesPersona.sugUsersContainer}>
        <div className="perfilSugeridos" style={_stylesPersona.fotoPerfil2}>
          
        </div>
        <div
          style={_stylesPersona.sugUser}
          onMouseEnter={() => {
            setUsuario1("underline");
          }}
          onMouseLeave={() => {
            setUsuario1("none");
          }}
        >
          usuario
        </div>
        
      </div>

      <div className="sugerenciaUsers" style={_stylesPersona.sugUsersContainer}>
        <div className="perfilSugeridos" style={_stylesPersona.fotoPerfil3}>
          
        </div>
        <div
          style={_stylesPersona.sugUser2}
          onMouseEnter={() => {
            setUsuario2("underline");
          }}
          onMouseLeave={() => {
            setUsuario2("none");
          }}
        >
          usuario
        </div>
        
      </div>
      
      
    </div>
  );
};

export default InfoPersona;
