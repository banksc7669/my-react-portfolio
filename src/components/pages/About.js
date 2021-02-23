import React from "react";
import headshot from "../../Images/me.jpeg";


function About() {
  return (
    <div>
      <div>
        <div class="card mb-3">
        <div class="row homeCardBody">
          <div class="col-md-4" id="headshotDiv">
              <img id="headshot" src={headshot} alt="Headshot" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title cursive-font"> - Full Stack Developer</h2>
              <hr></hr>
              <p class="card-text">    
                    My experience in full stack development allows me to assist with all
                    aspects of web application design and development. It has also
                    taught me that team-focused approaches to design and development
                    allow multiple perspectives that yield a better overall product for
                    clients and users as well as providing me with opportunities for
                    growth.
                </p>
                <p class="card-text">
                    Prior to full stack development, I spent several years in the clinical research industry as an
                    analyst and study manager. During this time my focus was to provide FDA guidance
                    to the pharmaceutical companies in bringing both drugs and devices the the market
                    through clinical trials.

                    <h4 class="mt-5"><u>Resume Highlights</u></h4>
                        <ul>
                            <li class="mt-2">Languages: JavaScript ES6+, CSS3, HTML5, SQL, MySQL</li>
                            <li class="mt-2">Applications: GitHub, MongoDB, MySQL</li>
                            <li class="mt-2">Tools: Node, jQuery, Bootstrap, React, Bulma</li>
                            <li class="mt-2">Certificate in Full Stack Development from University of North Carolina at
                                Chapel Hill</li>
                        </ul>
                </p>
            </div>
          </div>
          </div>
        </div>

      </div>


    <footer class="footer">
      Find me on <a href="https://www.linkedin.com/in/christopher-banks-bb500257/" target="_blank">LinkedIn</a>, and <a href="https://github.com/banksc7669" target="_blank">GitHub</a>
    </footer>

  </div>
  );
}

export default About;