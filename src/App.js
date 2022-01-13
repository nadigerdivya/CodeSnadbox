import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
