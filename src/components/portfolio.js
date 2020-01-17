import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItem from "./portfolioitem";

const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    const data  = useStaticQuery(
        graphql`
          query {
            allPortfolioJson(sort: {fields: name}) {
                edges {
                  node {
                    image
                    name
                    github
                    description
                    deployed
                  }
                }
              }
          }
        `
    );

   useEffect(() => {
    setPortfolioItems(data.allPortfolioJson.edges)
   }, [data])
    
    
    if (portfolioItems) console.log(portfolioItems)

    return (
        <div id="portfolio-display">
        <div className="content">
            <div id="portfolio">
                <h2>Portfolio</h2>
                <div id="portfolio-items">
                    {portfolioItems.map(project => <PortfolioItem key={project.node.name} name={project.node.name} image={project.node.image} deployed={project.node.deployed} github={project.node.github} description={project.node.description} />)}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Portfolio;