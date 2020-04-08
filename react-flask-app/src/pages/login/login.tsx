import React, { useState } from "react";
import { Button, Form, Alert} from "react-bootstrap";
import './login.css';
// import {deleteTokens, isLoggedIn} from "../../util/auth";
// import {Link} from "react-router-dom";

// function FieldGroup({ id, label, ...props }:any) {
//   return (
//     <Form.Group controlId={id}>
//       <Form.Label>{label}</Form.Label>
//       <Form.Control required {...props} />
//     </Form.Group>
//   );
// }

export default function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);


    const IncorrectPassword = () =>{
        if(incorrectPassword){
            return(
                <Alert variant={"danger"}>
                    Could not find account with that email and password.
                </Alert>
            )

        } else{
            return null
        }
    };

    function handleSignIn(e: any) {
        e.preventDefault() ;

        const form = e.currentTarget;

        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          setValidated(true);
          return;
        }

        setValidated(true);


        fetch("/login", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email: email, password: password})
        }).then( res => res.json())
            .then(data=>{
             //@ts-ignore
             localStorage.setItem('access_token', data.access_token);
             //@ts-ignore
            localStorage.setItem('email', data.email);

             if (localStorage.getItem("access_token") !== null && localStorage.getItem("access_token")!=="undefined") {
               window.location.replace("/")
             }
             else{
               setIncorrectPassword(true);
            }
        }).catch(err => console.log(err));
    };
    return (
      <div className="LoginForm">
        <Form noValidate validated={validated} onSubmit={handleSignIn}>
          <Form.Row>
            <Form.Group controlId="formControlsEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                name="username"
                  //@ts-ignore
                value={email}
                onChange={(e: any)=>{setEmail(e.target.value)}}
                placeholder="Enter email"
              />
              {/*<Form.Control.Feedback type={"valid"}>Looks good!</Form.Control.Feedback>*/}
              <Form.Control.Feedback type={"invalid"}>Please enter a valid email.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formControlsPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                      //@ts-ignore
                value={password}
                onChange={(e: any)=>{setPassword(e.target.value)}}
                placeholder="Password"
              />
              {/*<Form.Control.Feedback type={"valid"}>Looks good!</Form.Control.Feedback>*/}
              <Form.Control.Feedback type={"invalid"}>Please enter a valid password.</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
            <IncorrectPassword/>
         <Button type="submit">Login</Button>
        </Form>
      </div>
    );
}