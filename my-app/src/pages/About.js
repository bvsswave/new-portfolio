import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = (props) => {

    return(<>
        <MyNavbar/>
        <h1 style={{textAlign:'center'}}>About Me</h1>
        <div style={{width:'75%', padding:'10px', fontSize:'20px'}}>
           I work in marketing for SkullCandy and I make 80's tunes on the side. I also studied web development at the University of Utah!
        </div>
        <Footer/>
    </>
    )
}

export default About;