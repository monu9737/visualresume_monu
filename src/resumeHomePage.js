import React from "react";
import "./resumeHomePage.css";

const ResumeHomePage = () => {


  return (
    <div className="homePageBody">
      <div id="container">
        <div class="item">Home</div>
        <div class="item">about</div>
        <div class="item">Projects</div>
        <div class="item">Certifications</div>
        <div class="item">Contact</div>
      </div>
      <div className="main_Body">
          <label>Welcome to my Visual Resume</label>
      </div>
      <div className="footer">
        <label>Version 1.0.0 | VisualResumeRepository (This Project)</label>
        <label>@2025 Monu Kumar. All rights reserved</label>
      </div>
    </div>
  );
};

export default ResumeHomePage;
