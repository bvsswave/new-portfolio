import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../images/profile.png";


const Home = (props) => {

    return(<>
        <MyNavbar/>
        <div style={{textAlign:"center"}}>
            <img className="profile" src={profile} alt="profile pic" /> <br/>
            <a href="https://docs.google.com/document/d/1oxoqsUDnObQh2quBDT4kCnPS473Sw28QyVMgdVuL3pU/edit?usp=sharing">Click Here For My Resume</a>
            <h2 className="mx-auto">List of language Proficiencies</h2>
            <ul className="mx-auto">
                <li>HTML</li>
            </ul>
        </div>
        <Footer/>
        </>
    )
}


export default Home;