import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form } from 'react-bootstrap';


const Contact = (props) => {

    return(<>
        <MyNavbar/>
        <section className="mx-auto" style={{display:"flex", justifyContent:'space-between', textAlign:'center', width:'75%', padding:'50px'}}>
        <div>
            <h2>Email:</h2>
            <a href="mailto:tannershahan@gmail.com">tannershahan@gmail.com</a>
        </div>
        <div>
        <h2>Work Email:</h2>
            <a href="mailto:tanner.shahan@skullcandy.com">tanner.shahan@skullcandy.com</a>
        </div>
        <div>
            <h2>Github:</h2>
            <a href="https://github.com/bvsswave">Bvsswave</a>
        </div>
        
        </section>
                <Form style={{width:'75%'}} className="mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Your Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write me a message</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
        <Footer/>
        </>
    )
}



export default Contact;