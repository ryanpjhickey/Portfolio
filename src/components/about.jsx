import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", barPercentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "CSS3", barPercentage: "85%", value: "85" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          barPercentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          barPercentage: "90%",
          value: "90"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          barPercentage: "85%",
          value: "85"
        },
        {
          id: "MySQL_skill",
          content: "MySQL",
          barPercentage: "80%",
          value: "80"
        },
        {
          id: "Java_skill",
          content: "Java",
          barPercentage: "75%",
          value: "75"
        },
        { id: "CSharp_skill", content: "C#", barPercentage: "70%", value: "70" },
        // {
        //   id: "VanillaJS_skill",
        //   content: "VanillaJS",
        //   barPercentage: "85%",
        //   value: "85"
        // },
        // {
        //   id: "Wordpress_skill",
        //   content: "Wordpress",
        //   barPercentage: "80%",
        //   value: "80"
        // }
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
            "Eventually, I'd hope to help create applications, services, and products that can positively impact the world in some way. I believe programming is a beautiful industry that can largely effect the world more than any other industry. Ultimately, I want to be able to use that power that programming has to make our world better in one way or another."
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
                    <div className="skill-mf">
                      <p className="title-s">Technical Skills</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.barPercentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.barPercentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
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
