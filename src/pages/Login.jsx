import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const style = {
  marginLeft: "160px",
};
function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()

      function handleSubmit(e){
        e.preventDefault()
          const user = {
            username:usernameRef.current.value,
            password:passwordRef.current.value,
          }

          fetch("https://auth-rg69.onrender.com/api/auth/signin" , {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data =>{
                if(data.id){
                    navigate("/")
                    localStorage.setItem("accesToken" , data.accesToken)
                    localStorage.setItem("user" , data)
            }
            })
          .catch(err =>{
            console.log(err.message);
          })
      }

  return (
    <div className="container w-50">
        <h1 className="text-center mt-5" >Login Page</h1>
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

export default Login;
