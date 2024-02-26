import { NavLink, Route, Routes } from "react-router-dom";
import "./Home.css";
import Login from "./Login";
import Register from "./Register";
function Home() {
  return (
    <div classNameName="container">
        <div className="navlinks">
        <NavLink to = '/Register'>Register</NavLink>
         <NavLink to='/Login'>Login</NavLink>
        </div>
      <Routes>
      <Route path = '/Login' element = {<Login></Login>}></Route>
        <Route path = '/Register' element = {<Register></Register>}></Route>
      </Routes>
        <h1 className="mt-3 text-center" >Home Page</h1>
      <div className="card-group  display-flex gap-5">
        <div className="card">
          <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="images" src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/200/304" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
