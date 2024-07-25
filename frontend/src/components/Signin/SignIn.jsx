import React, { useState } from "react";
import "./SignIn.css";
import { Button, Form, Mentions, Input } from "antd";
import { Link, useNavigate} from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";

const SignIn = ({HandleCallback}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();
    const url = "http://localhost:7070/signin";
    axios
      .post(url, { email, password })
      .then((res) => {
        if (res.data.user.email === email) {
          const data = res.data.user;
          alert("Log In Successfully");
          console.log(data);
          const transferUserData = () => {
            HandleCallback(data)
          }  
          transferUserData();   
          navigate("/home" );
        } else {
          alert("Email Or Password Is Invalid")
          console.error("Empty response or invalid data format");
        }
      })
      .catch((err) => {
        console.error("Error occurred while fetching data:", err);
      });
  };

  return (
    <Container>
      <div className="sign-in-page col-12 col-md-6 row">
        <h1>WELCOME TO EDUTISM</h1>
        <Form onSubmitCapture={addData}>
         <Form.Item
                  label="Email"
                  name="email"
                  type="email"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(e) => setEmail(e.target.value)}
                >
                  <Mentions />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(e) => setPassword(e.target.value)}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Log In
                  </Button>
                </Form.Item>
        </Form>
        <br></br>
        <p>New to EDUTISM ?</p>
        <Link to="EdutismRegistration" className="nav-regform-signin">
          REGISTER fOR EDUTISM
        </Link>
      </div>
      <div className="sign-in-page-right col-12 col-md-6 row">
        <Container>
          <h2>There's a better </h2>
          <h2>way to grow up</h2>

          <p>
            Our original IQ test is the most scientifically valid free IQ test
            available online today.
          </p>
        </Container>
      </div>
    </Container>
  );
};

export default SignIn;
