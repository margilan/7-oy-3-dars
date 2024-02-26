import React from "react";
import "./Register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const style = {
  marginLeft: "160px",
};
function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()

      function handleSubmit(e){
        e.preventDefault()
          const user = {
            username:usernameRef.current.value,
            password:passwordRef.current.value,
            email:emailRef.current.value
          }

          fetch("https://auth-rg69.onrender.com/api/auth/signup" , {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data =>{
            if(data.message == "User registered successfully!"){
                    navigate("/Login")
            }
          })
          .catch(err =>{
            console.log(err.message);
          })
      }

  return (
    <div className="container w-50">
        <h1 className="text-center mt-5" >Register Page</h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your userName ..."
          />
        </div>

        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Email ..."
          />
        </div>

        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password ..."
          />
        </div>

        <button
          style={style}
          type="submit"
          className="btn btn-primary w-50 justify-content-center"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
