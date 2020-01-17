import React from "react";
import { MdTerrain, MdWhatshot, MdTrendingUp } from "react-icons/md";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { AboutItem, AboutList, ColorBlock, AboutMe, ClearFix } from "../styles";

const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            fadeIn="true"
            durationFadeIn="6000"
            style={{ width: 400 }}
        />
    )
}

const About = () => {
    return (
        <div id="about">
            <h2>About Me</h2>
            <ClearFix>
                <AboutList>
                    <AboutItem>
                        <MdWhatshot className="list-icon" />
                        <h5>Passionate</h5>
                        <p>I invest myself in building upon my knowledge.</p>
                    </AboutItem>
                    <ColorBlock />
                    <ColorBlock />
                    <AboutItem>
                        <MdTerrain className="list-icon" />
                        <h5>Adventurous</h5>
                        <p>I am in my element when I am facing a challenging problem.</p>
                    </AboutItem>
                    <AboutItem>
                        <MdTrendingUp className="list-icon" />
                        <h5>Always Growing</h5>
                        <p>I actively seek opportunities to broaden my knowledge and skills.</p>
                    </AboutItem>
                    <ColorBlock />
                </AboutList>
                <div className="clearfix">
                    <AboutMe>
                        <Image />

                        <p>I am a full stack web developer with a background in education. I started coding as a
                            hobby, and it quickly turned into a passion. I jumped into the field of web devolopment
                                because I love challenges and learning, and there isn't a better place for me to be!</p>
                        <h4>Technologies:</h4>
                        <p>JavaScript, React, React Hooks, Node.js, HTML5, CSS3, BootStrap, Materialize, JQuery, MySQL, MongoDB, NoSQL, Express,
                                Sequelize, GraphQL, Apollo, Handlebars Templating, and always adding more to my skills.</p>
                    </AboutMe>
                </div>
            </ClearFix>

        </div>
    )
}

export default About;