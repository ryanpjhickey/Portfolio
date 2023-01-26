import React from "react";

//import photos
import paws from "../img/paws.jpg";
import cook1 from "../img/cookbook.png";
import cook2 from "../img/cookbook_demo.png";
import quiz1 from "../img/quiz.png";
import quiz2 from "../img/quiz_demo1.png";
import quiz3 from "../img/quiz_demo2.png"
import skincare from "../img/store.png"
import pgen from "../img/password.png"
import aeroplane from "../img/aeroplane.png"

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below you will find a few of my projects. I am regularly working on new projects and updating this page, please ask me if you have any questions about any of my projects!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={paws} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={paws} alt="" className="img-thumbnail" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <a href="https://github.com/ryanpjhickey/Paws-to-Home" className="w-title">Paws-to-Home</a>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Bulma JavaScript jQuery
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={pgen} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={pgen} alt="" className="img-thumbnail" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <a href="https://github.com/ryanpjhickey/PasswordGenerator" className="w-title">Password Generator</a>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML CSS JavaScript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={quiz1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={quiz1} alt="" className="img-thumbnail" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <a href="https://github.com/ryanpjhickey/Coding-Quiz-Web-App" className="w-title">Coding Quiz</a>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS JavaScript
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={quiz2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={quiz3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={cook1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={cook1} alt="" className="img-thumbnail" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <a href="https://github.com/ryanpjhickey/cook-book" className="w-title">CookBook</a>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Bootstrap JavaScript React.js Apollo GraphQL Node.js Heroku Axios MongoDB
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
                <a
                  href={cook2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={skincare} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={skincare} alt="" className="img-thumbnail" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <a href="https://github.com/ryanpjhickey/beauty2door" className="w-title">BeautyToYou</a>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML CSS Bootstrap JavaScript React.js Apollo GraphQL Node.js Heroku Axios MongoDB
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="work-box">
                <a href={aeroplane} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={aeroplane} alt="" className="img-thumbnail" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <a href="https://github.com/ryanpjhickey/airplane-threejs" className="w-title">Airplane Three.js</a>
                        <div className="w-more">
                          <span className="w-ctegory">
                          HTML CSS JavaScript Three.js
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Portfolio;
