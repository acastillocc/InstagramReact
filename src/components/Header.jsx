import React from "react";
import logo from "../images/instagram.png";
import { GrFormSearch } from "react-icons/gr";
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const _stylesHeader = {
    container: {
      display: "flex",
      backgroundColor: "white",
      height: "53px",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "thin solid #DBDBDB",
    },

    logo: {
      display: "flex",
      width: "25.5%",
    },

    header: {
      display: "flex",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 15px",
      height: "100%",
      width: "65%",
      fontSize: "15px",
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
    },

    icons: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "28%",
      height: "100%",
      cursor: "pointer",
    },
  };

  return (
    <div style={_stylesHeader.container}>
      <div style={_stylesHeader.header}>
        <div style={_stylesHeader.logo}>
          <img src={logo} alt="Instagram" width="110" height="40" />
        </div>
        <div style={_stylesHeader.buscar}>
          <GrFormSearch size={18} color="#AEAFB2" /> Busca
        </div>
        <div style={_stylesHeader.icons}>
          <MdHomeFilled size={28} color="black" />
          <RiMessengerLine size={28} />
          <BsPlusSquare size={20} />
          <MdOutlineExplore size={28} />
          <FiHeart size={25} />
          <VscAccount size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
