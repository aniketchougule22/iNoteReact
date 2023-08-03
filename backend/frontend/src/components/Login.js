import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const host = process.env.REACT_APP_YOUR_BASE_URL;
  
  const [ body, setBody ] = useState({email: "", password: ""});
  let navigate = useNavigate();

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: body.email, password: body.password})
    });

    const json = await response.json();
    console.log("loginJson", json);
    if (json.status === true) {
        // save the token & redirect
        localStorage.setItem('token', json.token);
        props.showAlert("Logged in successfully..!", "success");
        navigate("/");
    } else {
        props.showAlert("Invalid Email OR Password..!", "danger");
    }
  };

  const onChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto col-10 col-md-8 col-lg-6">
    <h2 className="my-4">Login to continue <strong>iNoteReact</strong></h2><hr/>
      <form onSubmit={handleSubmitClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={body.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={body.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
