import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Portfolio = (props) => {

    return(<>
        <MyNavbar/>
        <section style={{backgroundColor:'#9a8f97', height:'100%', display:'flex', justifyContent:'space-evenly'}}>
            <div>

        <Card Link="https://notetakerbvsswave-app.herokuapp.com/" pic={Runbuddy} alt="Note Taker" repo="https://github.com/bvsswave/Take-Notes.git" name="Note Taker" />

         
            </div>
        </section>
        <Footer/>
        </>
    )
}



export default Portfolio;