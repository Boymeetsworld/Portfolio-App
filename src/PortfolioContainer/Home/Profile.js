import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.instagram.com/its_bs2u/?hl=bg">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCaiZ1MVxkD30ol8fdFc8FAQ">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/ayden-scott-a3873b207?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ayden</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                  
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
