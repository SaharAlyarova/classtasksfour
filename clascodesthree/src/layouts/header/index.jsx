import React from 'react'
import {Link} from 'react-router-dom'
const HeaderLay = () => {
  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        <img
          src="https://preview.colorlib.com/theme/course/images/logo.png"
          alt=""
        />
        <h2>COURSE</h2>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <Link to={"/"}>
              {" "}
              <li>Home</li>
            </Link>
            <li>About Us</li>
            <li>Courses</li>
            <li>Elements</li>
            <li>News</li>
            <li>Contact</li>
            <Link to={"/addpage"}>
              <li>Add Page</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div
        style={{
          backgroundColor: "#FFB606",
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
          padding: "10px",
        }}
      >
        <i
          class="fa-sharp fa-solid fa-phone-volume"
          style={{ color: "white" }}
        ></i>
        <p style={{ color: "white" }}>+43 4566 7788 2457</p>
      </div>
    </div>
  );
}

export default HeaderLay
