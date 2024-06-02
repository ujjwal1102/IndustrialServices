import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Industrio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Header Section */}
      <header className="text-center text-white">
        <div className="overlay" />
        <div className="header-content">
          <h1>
            We will provide the best{" "}
            <span className="text-orange">Industrial</span> service
          </h1>
          <a href="#" className="btn btn-orange">
            Learn More
          </a>
        </div>
      </header>
      {/* Services Section */}
      <section id="services" className="text-center">
        <div className="container">
          <h2>Services we provide</h2>
          <p>
            You will find yourself working in a true partnership that results in
            an incredible experience, and an end product that is the best.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <img src="path_to_image" alt="Power & Energy Sector" />
                <h3>Power &amp; Energy Sector</h3>
                <p>Manufacturing industry's standard lorem ipsum text.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <img src="path_to_image" alt="Petroleum Refinery" />
                <h3>Petroleum Refinery</h3>
                <p>Manufacturing industry's standard lorem ipsum text.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <img src="path_to_image" alt="Mechanical Engineering" />
                <h3>Mechanical Engineering</h3>
                <p>Manufacturing industry's standard lorem ipsum text.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="text-white">
        <div className="container text-center">
          <h2>Why choose us?</h2>
          <p>
            Manufacturing industry became a key sector of production and labour
            in European and North American countries during the Industrial
            Revolution, upsetting mercantile and feudal economies.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="stat-box">
                <h3>101</h3>
                <p>5 Star Rating</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box">
                <h3>32</h3>
                <p>Team Members</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box">
                <h3>204</h3>
                <p>Completed Jobs</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <h4>Creative Ideas</h4>
                <p>
                  Best service in industry, who meet our needs and provide
                  safety.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <h4>Super Safety</h4>
                <p>
                  Best service in industry, who meet our needs and provide
                  safety.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <h4>24/7 Support</h4>
                <p>
                  Best service in industry, who meet our needs and provide
                  safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="text-center">
        <div className="container">
          <h2>Projects for inspirations</h2>
          <p>
            You will find yourself working in a true partnership that results in
            an incredible experience, and an end product that is the best.
          </p>
          <div className="row">
            <div className="col-md-4">
              <img src="path_to_image" alt="Project Image" />
            </div>
            <div className="col-md-4">
              <img src="path_to_image" alt="Project Image" />
            </div>
            <div className="col-md-4">
              <img src="path_to_image" alt="Project Image" />
            </div>
            <div className="col-md-4">
              <img src="path_to_image" alt="Project Image" />
            </div>
            <div className="col-md-4">
              <img src="path_to_image" alt="Project Image" />
            </div>
            <div className="col-md-4">
              <img src="path_to_image" alt="Project Image" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center text-white">
        <div className="container">
          <p>© 2024 Industrio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
