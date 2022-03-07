import React from "react";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const myStyle = {
        textAlign: "center",
        color: "white",
        backgroundColor: "darkGrey",
        padding: "10px",
        width:'100%'
    }
    return( <>
    <footer style={myStyle}>
        <article>
            <div> &copy;2021 <strong>Preston Watson's Portfolio&nbsp;</strong></div>
        </article>
    </footer>
    </>
    )
}

export default Footer;