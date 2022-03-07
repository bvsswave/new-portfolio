import React from "react";
import { Link } from "react-router-dom";
import "../index";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({Link,pic,alt,repo,name}) => { 
    return(
        <>
            <a className="Work" href={Link}>{name}</a>
            <a href={repo}></a>
            <img className="profile" src={pic} alt={alt}/>

        </>
    )
    
}

export default Card;