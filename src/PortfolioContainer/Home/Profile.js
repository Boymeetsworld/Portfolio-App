import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, Im <span className="highlighted-text">Ayden</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 💻",
                    1000,
                    "Full Stack Developer 📚",
                    1000,
                    "Web Designer 🖌",
                    1000,
                    "React Developer ⚙️",
                    1000,
                    "Artist At Heart 🖼",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Atlanta creative merging tech and art.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me </button>
            <a href="Ayden_Scott_Resume.pdf" download="Ayden_Scott_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-bakcground"></div>
        </div>
      </div>
    </div>
  );
}
