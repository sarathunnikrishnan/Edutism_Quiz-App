import React, { useState } from "react";
import "./EdutismRegistration.css";
import { Button, DatePicker, Form, Input, Mentions } from "antd";
import { Container } from "react-bootstrap";
import girl from "./kiddo-pointing-up-204x300.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EdutismRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const addData = (e) => {
   
    e.preventDefault();
    const url = "http://localhost:7070/dataregister"
    axios.post(url, {firstName,
      lastName,
      email,
      phoneNumber,
      birthDate,
      state,
      password}).then((res)=>{
           alert(res.data)
        if(res.data !== "This Email is already exist"){
          navigate('/signin')
        }
        
      })
  };
  return (
    <div>
      <Container>
        <div>
          <div className="form-left col-12 col-md-6">
            <Container>
              <h3>Let's get ready for school!</h3>
              <br></br>
              <h5>It doesn't cost you anything, but it's worth everything.</h5>
              <br></br>
              <p>
                Waterford Upstart is an at-home early learning program that
                gives you the tools, coaching, and resources so you can put your
                child on a path to academic success.
              </p>
              <p>
                Whether over the summer or through the school year, generous
                supporters enable us to offer this program at no cost to
                families – the only thing you’ll spend is time with your child!
              </p>
              <br></br>
              <h5>Your child's success is our mission.</h5>
              <p>
                You want your child to enter school confident and ready to
                learn. So do we.
              </p>
              <br />
              <p>
                With Waterford Upstart, your child will learn foundational
                skills in reading, math, and science, right at home.
              </p>
              <br />
              <p>Fill out this form today to see if you qualify!</p>
            </Container>
          </div>
          <div className="form-right col-12 col-md-6">
            <div className="form-page">
              <h5>A lifetime of learning success starts here!​</h5>
              <Form
                variant="filled"
                style={{ maxWidth: 600 }}
                action="post"
                onSubmitCapture={addData}
              >
                <Form.Item
                  label="First Name :"
                  name="FirstName"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Last Name :"
                  name="lastName"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(e) => setLastName(e.target.value)}
                >
                  <Input />
                </Form.Item>

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
                  label="Phone Number"
                  name="phonenumber"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                >
                  <Mentions />
                </Form.Item>

                <Form.Item
                  label="Child's Birth Year"
                  name="DatePicker"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <DatePicker
                    onChange={(date, dateString) => setBirthDate(dateString)}
                  />
                </Form.Item>

                <Form.Item
                  label="State"
                  name="state"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(e) => setState(e.target.value)}
                >
                  <Mentions />
                </Form.Item>

                <Form.Item
                  label="Create Password"
                  name="password"
                  rules={[{ required: true, message: "Please input!" }]}
                  onChange={(e) => setPassword(e.target.value)}
                >
                 <Input.Password />
                </Form.Item>

                <h6 style={{ fontSize: ".7em" }}>
                  By submitting this form, you agree to receive Upstart email
                  communications, including program announcements and free
                  learning resources.
                </h6>

                <br></br>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div>
            <div className="form-footer-left col-12 col-md-6">
              <img src={girl} alt="girl"></img>
            </div>
            <div className="form-footer-right col-12 col-md-6">
              <h1>Stay in the Know</h1>
              <p>
                Sign up for the latest information on our programs, resources,
                and more.
              </p>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EdutismRegistration;
