import React, { useState } from "react";
import user from "../images/user.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPaperPlaneOutline, IoChatbubbleOutline } from "react-icons/io5";
import { VscBookmark, VscSmiley } from "react-icons/vsc";

import { BsThreeDots } from "react-icons/bs";

const Post = (props) => {
  const [usuario, setUsuario] = useState("none");
  const [usuarioPost, setUsuarioPost] = useState("none");
  const [icon1, setIcon1] = useState("black");
  const [icon2, setIcon2] = useState("black");
  const [icon3, setIcon3] = useState("black");
  const [icon4, setIcon4] = useState("black");

  const _stylesPost = {
    contentPost: {
      backgroundColor: "#FAFAFA",
      display: "flex",
      justifyContent: "center",
      maxWidth: "1540px",
      minHeight: "690px",
    },

    postDiseño: {
      position: "relative",
      left: "-10.5%",
      marginTop: "15px",
      marginBottom: "15px",
      padding: "0",
      width: "619px",
      height: "600px",
      zIndex: "3",
    },

    headerPost: {
      display: "inline-block",
      position: "absolute",
      width: "100% ",
      height: "9.5%",
      backgroundColor: "white",
      borderRadius: "3px",
      border: "thin solid #DBDBDB",
      alignItems: "center",
      justifyContent: "space-between",
    },

    userPhoto: {
      display: "flex",
      float: "left",
      width: "5.5%",
      height: "57%",
      margin: "15px 15px",
      borderRadius: "90px",
      cursor: "pointer",
    },

    userNameContainer: {
      display: "flex",
      float: "left",
      width: "80%",
      height: "100%",
      alignItems: "center",
      textDecoration: `${usuario}`,
      fontWeight: "600",
      fontSize: "14px",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },

    userName: {
      cursor: "pointer",
    },

    dots: {
      display: "flex",
      float: "right",
      width: "7.5%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },

    imagen: {
      margin: "0",
      top: "0",
      width: "100% ",
      height: "71%",
      backgroundImage: "url(https://picsum.photos//620/495)",
      border: "thin solid #DBDBDB",
      zIndex: "4",
    },

    iconsContent: {
      display: "flex",
      width: "96.6%",
      height: "3%",
      padding: "10px 10px 0px 10px",
      alignItems: "center",
      backgroundColor: "white",
      borderLeft: "thin solid #DBDBDB",
      borderRight: "thin solid #DBDBDB",
      zIndex: "7",
    },

    iconsInteractions: {
      display: "flex",
      paddingTop: "17px",
      width: "110px",
      height: "20%",
      alignItems: "center",
      justifyContent: "space-between",
    },

    iconsInteractions2: {
      display: "flex",
      float: "right",
      paddingTop: "17px",

      width: "490px",
      height: "10%",
      alignItems: "center",
      justifyContent: "flex-end",
    },

    icon1: {
      color: `${icon1}`,
      cursor: "pointer",
    },

    icon2: {
      color: `${icon2}`,
      cursor: "pointer",
    },

    icon3: {
      color: `${icon3}`,
      cursor: "pointer",
    },

    icon4: {
      color: `${icon4}`,
      cursor: "pointer",
    },

    likes: {
      display: "flex",
      paddingLeft: "11px",
      paddingTop: "18px",
      width: "98%",
      height: "5%",
      alignItems: "center",
      fontSize: "14px",
      fontWeight: "550",
      backgroundColor: "white",
      borderLeft: "thin solid #DBDBDB",
      borderRight: "thin solid #DBDBDB",
      cursor: "pointer",
    },

    usuarioContent: {
      display: "flex",
      paddingLeft: "10px",
      width: "98.2%",
      height: "4%",
      alignItems: "center",
      backgroundColor: "white",
      borderLeft: "thin solid #DBDBDB",
      borderRight: "thin solid #DBDBDB",
      cursor: "pointer",
    },

    usuario: {
      fontSize: "14px",
      fontWeight: "550",
      textDecoration: `${usuarioPost}`,
      cursor: "pointer",
    },

    descripcion: {
      display: "flex",
      width: "30%",
      height: "100%",
      paddingLeft: "5px",
      fontSize: "14px",
      alignItems: "center",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    texts: {
      width: "100%",
      fontSize: "14px",
      padding: "4px 0px 0px 0px",
      color: "#8E8E8E",
    },

    postTime: {
      display: "flex",
      width: "98.2%",
      fontSize: "10px",
      paddingLeft:" 10px",
      paddingTop: "10px",
      paddingBottom: "15px",
      color: "#8E8E8E",
      borderLeft: "thin solid #DBDBDB",
      borderRight: "thin solid #DBDBDB",
      cursor: "pointer"
    },

    footerComment: {
        display: "flex",
        alignItems: "center",
        padding: "15px",
        width: "94.9%",
        height: "5%",
        border: "thin solid #DBDBDB",

    },

    smile: {
        cursor: "pointer"
    },

    addComment: {
        display: "flex",
        width: "90%",
        paddingLeft: "15px",
        fontSize: "14px",
        color: "#8E8E8E",
        cursor: "text"

    },

    publicar: {
        color: "#0095F6",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer"
    }
  };
  return (
    <div className="contentPost" style={_stylesPost.contentPost}>
      <div
        style={{
          ..._stylesPost.postDiseño,
          ..._stylesPost.postDiseño[props.size],
        }}
      >
        <div className="headerPost" style={_stylesPost.headerPost}>
          <img
            src={user}
            style={_stylesPost.userPhoto}
            alt="Instagram"
            width="110"
            height="40"
          />
          <div style={_stylesPost.dots}>
            <BsThreeDots></BsThreeDots>
          </div>
          <div
            className="userNameContainer"
            style={_stylesPost.userNameContainer}
          >
            <div
              className="username"
              style={_stylesPost.userName}
              onMouseEnter={() => {
                setUsuario("underline");
              }}
              onMouseLeave={() => {
                setUsuario("none");
              }}
            >
              usuario
            </div>
          </div>
        </div>

        <div className="foto" style={_stylesPost.imagen}></div>
        <div className="interactions" style={_stylesPost.iconsContent}>
          <div className="icons" style={_stylesPost.iconsInteractions}>
            <div style={_stylesPost.icon1}>
              <IoMdHeartEmpty
                size={27}
                onMouseEnter={() => {
                  setIcon1("gray");
                }}
                onMouseLeave={() => {
                  setIcon1("black");
                }}
              />
            </div>

            <div style={_stylesPost.icon2}>
              <IoChatbubbleOutline
                size={24}
                onMouseEnter={() => {
                  setIcon2("gray");
                }}
                onMouseLeave={() => {
                  setIcon2("black");
                }}
              />
            </div>

            <div style={_stylesPost.icon3}>
              <IoPaperPlaneOutline
                size={25}
                onMouseEnter={() => {
                  setIcon3("gray");
                }}
                onMouseLeave={() => {
                  setIcon3("black");
                }}
              />
            </div>
          </div>
          <div className="icons" style={_stylesPost.iconsInteractions2}>
            <div style={_stylesPost.icon4}>
              <VscBookmark
                size={25}
                onMouseEnter={() => {
                  setIcon4("gray");
                }}
                onMouseLeave={() => {
                  setIcon4("black");
                }}
              />
            </div>
          </div>
        </div>
        <div className="likes" style={_stylesPost.likes}>
          30 Me gusta
        </div>
        <div className="usuarioContent" style={_stylesPost.usuarioContent}>
          <div
            className="usuario"
            style={_stylesPost.usuario}
            onMouseEnter={() => {
              setUsuarioPost("underline");
            }}
            onMouseLeave={() => {
              setUsuarioPost("none");
            }}
          >
            usuario
          </div>
          <div className="descriptionContent">
            
            <div className="description" style={_stylesPost.descripcion}>           
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.             
            </div>
          </div>
        </div>

        <div className="comentarioContent" style={_stylesPost.usuarioContent}>
          <div className="comentario" style={_stylesPost.texts}>
            Ver lo 12 comentarios
          </div>
        </div>
        <div className="comentario" style={_stylesPost.postTime}>
          HACE 4 DÍAS
        </div>

        <div className="footerComment" style={_stylesPost.footerComment}>
            <VscSmiley size={30} style={_stylesPost.smile}/>
            <div className="anadirComentario" style={_stylesPost.addComment}>
            Añade un comentario...
            </div>
            
            <div className="publicar" style={_stylesPost.publicar}>
            Publicar
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Post;
