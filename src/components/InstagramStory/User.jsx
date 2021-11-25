import React from "react";

const User = (props) => {
    const _stylesUser = {
        usuario: {
            margin: "21px 10px",
            borderRadius: "80px",
            width: "60px",
            cursor: "pointer"
        },

        one: {
            gridRowEnd: 'span 7',
            backgroundImage: "url(https://picsum.photos//60/60)",
          },
         two: {
            gridRowEnd: 'span 7',
            backgroundImage: "url(https://picsum.photos//60/61)",
          },

         three: {
            gridRowEnd: 'span 7',
            backgroundImage: "url(https://picsum.photos//60/62)",
          },

          four: {
            gridRowEnd: 'span 7',
            backgroundImage: "url(https://picsum.photos//61/62)",
          },

        username: {
            paddingTop: "53px",
            justifyContent: "center",
            fontSize: "12px"

        }
    }
    return (
        <div style={{ ..._stylesUser.usuario, ..._stylesUser[props.size]}}>
          <center> <p style={_stylesUser.username}>usuario</p> </center>
        </div>
    );
}

export default User