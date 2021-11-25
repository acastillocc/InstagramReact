import React from "react";
import User from "./User";

const Stories = () => {
  const _stylesStories = {
    container: {
      display: "flex",
      backgroundColor: "#FAFAFA",
      height: "160px",
      justifyContent: "center",
      zIndex: "4",
    },

    historias: {
      display: "-webkit-inline-box",
      backgroundColor: "white",
      marginTop: "30px",
      justifyContent: "center",
      width: "615px",
      height: "120px",
      border: "thin solid #DBDBDB",
      borderRadius: "3px",
      left: "26%",
      transform: "translateX(-26%)",
      gridTemplateColumns: "repeat(auto-fill 180px)",
      gridAutoRows: "15px",
      overflowX: "scroll",
      overflowY: "hidden",
    },
  };
  return (
    <div className="content" style={_stylesStories.container}>
      <div className="historias" style={_stylesStories.historias}>
        <User size="one" />
        <User size="two" />
        <User size="three" />
        <User size="four" />
        <User size="one" />
        <User size="two" />
        <User size="three" />
        <User size="four" />
        <User size="one" />
        <User size="two" />
        <User size="three" />
        <User size="four" />
        <User size="one" />
        <User size="two" />
        <User size="three" />
        <User size="four" />
        <User size="one" />
        <User size="two" />
        <User size="three" />
      </div>
    </div>
  );
};

export default Stories;
