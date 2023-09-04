import React, { useEffect } from 'react';
import '../Style/style.css';

function App() {
  useEffect(() => {
    document.body.style.opacity = '1';
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <nav>
          <h2 className="logo">Paulette</h2>
          <ul className="menu">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div id="about" className="body">
        <div><img className="icon-profile" src="MoraineProfilePictureCartoon.jpeg" alt="profile icon" /></div>
        <h4>Hey there,</h4>
        <div className="titleOne">I'm Paulette!</div>
        <p>I'm thrilled to have you visit my portfolio, where I showcase my journey as a junior developer. Here, you'll discover a collection of my proudest accomplishments, each representing my passion for coding and designing.</p>
        <p>Thank you for stopping by, and I hope you find inspiration and excitement in my work.</p>
      </div>

      <div id="projects" className="projects">
        <div className="title"></div>
        <h2>Projects</h2>
      </div>

      <div className="container">
        <a style={{ textDecoration: 'none' }} href="https://github.com/plttsthr/matchapx">
          <div className="box one">
            <h3>Matchapx Store</h3>
          </div>
        </a>

        <a style={{ textDecoration: 'none' }} href="https://github.com/plttsthr/myStock">
          <div className="box three">
            <h3>My Stock App</h3>
          </div>
        </a>

        <div className="box three">
          <h3>More Coming Soon</h3>
        </div>
      </div>

      <div id="contact" className="contact">
        <div className="title"></div>
        <h2>Contact</h2>
        <nav>
          <div className="Info">
            <ul>
              <li>
                <h11>linkedin.com/in/pauleher/ <a href="https://www.linkedin.com/in/pauleher/"><img className="icon-linkedin" src="linkedin.png" alt="linkedin icon" /></a></h11>
              </li>
              <li>
                <h11><img className="icon-mail" src="email.png" alt="mail icon" /> paulettehm21@gmail.com</h11>
              </li>
              <li>
                <h11><img className="icon-git" src="github.png" alt="mail icon" /> github.com/plttsthr</h11>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
