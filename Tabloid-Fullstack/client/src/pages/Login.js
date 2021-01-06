import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProvider";
import "./Login.css";

const Login = () => {
  const { login } = useContext(UserProfileContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login(email, password)
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("Invalid username or password");
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="avatar">
          <img src="/some/image.png" alt="Avatar" />
        </div>
        <h2 className="text-center">User Login</h2>
        <div className="form-group">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            required="required"
          />
        </div>
        <div className="form-group">
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <Button type="submit" block color="primary" disabled={loading}>
            Sign in
          </Button>
        </div>
        <div className="text-center small">
          Don't have an account?
          <div>
            <Link to="/register">Sign up here</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
