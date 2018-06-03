import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page-top">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Winona Wixson</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <header className="masthead">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="brand-heading">Winona</h1>
                <p className="intro-text">(wi-no-na, think "win" not "why").
                <br/>Native American name meaning first born daughter.
                <br />Named after my great-grandmother.</p>
                <a href="#about" className="btn btn-circle js-scroll-trigger">
                  <i className="fa fa-angle-double-down animated"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
  
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>About Me</h2>
              <p>I'm a software developer in Columbus, OH. My career began with a degree in mathematics,
                continued with a software bootcamp certificate, was kickstarted by a job at a healthcare startup, and has
                settled into being a consultant. Over the past 5 years I have lived in 5 different states for at least
                3 months each. I love to travel and experience new things. Swimming, kayaking, and hiking are a few of
                my favorite activities, but I still love winter for it's beautiful snow and downhill skiing opportunities!
              </p>
              <p>Recently I picked up photography as a creative hobby that encourages
                me to explore new places. Nature pictures, especially
                flowers, are my favorite but I'd like to start working on candids and portraits.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <section id="contact" className="contact-section text-center">
        <div className="container">
          <div className="col-lg-8 mx-auto">
          <h2>Contact Me</h2>
              <p></p>
              <ul className="list-inline banner-social-buttons">
                <li className="list-inline-item">
                  <a href="https://twitter.com/winniethejoy" className="btn btn-default btn-lg">
                    <i className="fa fa-twitter fa-fw"></i>
                    <span className="network-name">Twitter</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/winonawixson" className="btn btn-default btn-lg">
                    <i className="fa fa-github fa-fw"></i>
                    <span className="network-name">Github</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/winona-wixson-132a8192/" className="btn btn-default btn-lg">
                    <i className="fa fa-linkedin fa-fw"></i>
                    <span className="network-name">LinkedIn</span>
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="container text-center">
          <p>Copyright &copy; Winona's Website 2018</p>
        </div>
      </footer>
  
</div>  
    );
  }
}

export default App;
