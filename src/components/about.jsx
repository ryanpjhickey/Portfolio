import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "first-p-about",
          content:
            "I am proficient in HTML, CSS, JavaScript, jQuery, Git, GitHub, Bootstrap, Bulma, Node.js, React.js, Jest.js, SQL, MySQL, NoSQL, MongoDB, Express.js, Handlebars.js, GraphQL, Apollo, Java, VBA, Replit, and C#. I am always looking to improve my programming skills and learn new technologies."
        },
        {
          id: "second-p-about",
          content:
            " I have experience in developing and maintaining websites, translating visual prototypes into launch-ready code, troubleshooting for various different platforms, as well as experience in website build-outs. I currently work in a remote hybrid environment with large and diverse groups across large teams in the San Francisco Bay Area."
        },
        {
          id: "third-p-about",
          content:
            "I am flexible and adapt to change quickly. I am highly motivated to learn new things and I regularly solve problems utitlizing critical thinking skills. I'm always looking for new ways to do things in pursuit of efficiency and best practices. I value being a part of a team that builds relationships and trust to achieve our goals."
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Full Stack Developer who recently graduated from UC Davis's Full Stack Web Development Bootcamp. My skills are largely in web development and React apps, but I am open to new technologies and I am actively studying Java, C#, and Object Oriented Programming."
        },
        {
          id: "second-p-about",
          content:
            "I find passion in programming and I try to learn something new every day. I am actively seeking to improve myself and my programming skills. Currently, I am seeking out entry level Software Development positions that are interesting and positions that I feel I meet the requirements for."
        },
        {
          id: "third-p-about",
          content:
            "My long term goals include developing technology that can positively impact the world. I believe software development is an amazing career path that can largely effect the world in a positive way. Ultimately, I want to utilize power that programming has to make our world better."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Technical Skills</h5>
                      </div>
                      {this.state.skills.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
