import React, {useState} from "react";
import logo from "../images/instagram.png";
import { firebase } from "./firebase";
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { IoPaperPlaneOutline, IoSearch } from "react-icons/io5";
import {IoMdHeartEmpty} from "react-icons/io"
import { BsPlusSquare } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const Header = () => {

  const _stylesHeader = {
    container: {
      display: "flex",
      position: "sticky",
      top: "0",
      backgroundColor: "white",
      height: "53px",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "thin solid #DBDBDB",
      zIndex: "5",
    },

    logo: {
      display: "flex",
      width: "25%",
      paddingLeft: "20px",
      paddingTop: "5px",
      cursor: "pointer"
    },

    header: {
      display: "flex",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 20px",
      height: "100%",
      width: "65%",
      fontSize: "15px",
    },
    
    iconBuscar: {
      display: "flex",
      color: "#AEAFB2",
      alignItems: "center",
      padding: "2px 8px 0px 0px",
      width: "8vw",
    },

    p:{
      paddingLeft: "3px",
      alignItems: "center",
      color: "#AEAFB2"
    },

    buscar: {
      display: "flex",
      backgroundColor: "#FAFAFA",
      margin: "10px",
      padding: "0px 10px",
      alignItems: "center",
      borderRadius: "3px",
      border: "thin solid #DBDBDB",
      cursor: "text",
      height: "49%",
      width: "19.5%",
      color: "#AEAFB2",
      font: "inherit",
      fontSize: "14px",
      fontWeight: "lighter"
    },


    icons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 40px 0px  0px",
      width: "24%",
      height: "100%",
      cursor: "pointer",
    }

    
    
  };

  return  (
    <div style={_stylesHeader.container}>
      <div style={_stylesHeader.header}>
        <div style={_stylesHeader.logo}>
          <img src={logo} alt="Instagram" width="110" height="40" />
        </div>
        <div style={_stylesHeader.buscar}>
          <div style={_stylesHeader.iconBuscar}>
          <IoSearch size={12} color="#AEAFB2" strokeWidth="20" /> 
          <p style={_stylesHeader.p}>Busca </p>
          </div>
        </div>
        <div style={_stylesHeader.icons}>
          <MdHomeFilled size={28} color="black"  />
          <IoPaperPlaneOutline size={25} />
          <BsPlusSquare size={20} />
          <MdOutlineExplore size={28} />
          <IoMdHeartEmpty size={28} />
          <VscAccount size={25} />
        </div>

      </div>
      </div>
  );
};

export default Header;
