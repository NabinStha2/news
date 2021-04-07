import React, { useState } from "react";
import { Button, Card, Col, Container, Form } from "react-bootstrap";

const RegisterScreen = () => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container>
      <Card>
        <Form
          className="login__form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Register</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default RegisterScreen;
