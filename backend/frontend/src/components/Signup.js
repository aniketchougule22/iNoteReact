import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const host = process.env.REACT_APP_YOUR_BASE_URL;

    const [ body, setBody ] = useState({name: "", email: "", password: ""});

      let navigate = useNavigate();
    
      const handleSubmitClick = async (e) => {
        e.preventDefault();
    
        const response = await fetch(`${host}/api/user/create_user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name: body.name, email: body.email, password: body.password})
        });
    
        const json = await response.json();
       
        if (json.status === true) {
            // save the token & redirect
            localStorage.setItem('token', json.token);
            navigate("/");
            props.showAlert("Account created successfully..!", "success");
        } else {
            props.showAlert("Email already exists..!", "danger");
        }
      };
    
      const onChange = (e) => {
        setBody({ ...body, [e.target.name]: e.target.value });
      };

  return (
    <>
    <div className="mx-auto col-10 col-md-8 col-lg-6">
    <h2>Create an account to use <strong>iNoteReact</strong></h2><hr/>
      <form onSubmit={handleSubmitClick}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
            autoComplete="off"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
      <footer style={{
        textAlign: "right",
        backgroundColor: "#f0f0f0",
        paddingTop: "80px",
        marginLeft: "350px"
      }}
      >
        <p style={{ margin: "0", fontSize: "14px" }}>- Created by Aniket Chougule</p>
      </footer>
    </>
  );
};

export default Signup;
