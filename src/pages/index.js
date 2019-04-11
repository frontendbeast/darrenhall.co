import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../sass/main.scss"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query siteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Layout>
          <SEO title={data.site.siteMetadata.title} keywords={[`freelance`, `frontend`, `front end`, `front-end`, 'developer', `Manchester`, 'remote', `contractor`]} />
          <main className="c-section">
            <div className="o-wrapper">
              <h1 className="u-visually-hidden">Darren Hall</h1>
              <h2>I&rsquo;m a freelance frontend developer based in Manchester.</h2>
              <p>With over {new Date().getFullYear() - 2004} years of commercial experience I develop responsive, performant and accessible websites using HTML, CSS and JavaScript. I’ve done a lot of React work recently and have also done a fair few Node, Gatsby and Jekyll sites.</p>
              <p>I use Webpack in my build automation and have previously used Gulp and Grunt extensively. I’m currently moving my deployment from Travis CI to Buddy. </p>
              <h3>Skills</h3>
              <div className="o-grid">
                <div className="o-grid__item o-grid__item--1/1 o-grid__item--1/2@md">
                  <ul>
                    <li>CSS and Sass</li>
                    <li>HTML</li>
                    <li>JS, ES5 and ES6+</li>
                  </ul>
                </div>
                <div className="o-grid__item o-grid__item--1/1 o-grid__item--1/2@md">
                  <ul>
                    <li>Node, Webpack, Gulp</li>
                    <li>React, Jekyll, Gatsby and Angular </li>
                    <li>CI and TDD</li>
                  </ul>
                </div>
              </div>
              <h3>Test Driven Development</h3>
              <p>Mocha and Chai are my go to test tools, but I have also used Jasmine and Karma. I have some experience using BackstopJS to create automated visual regression tests.</p>
              <h3>Experienced with WordPress and Craft CMS</h3>
              <p>I have previously worked with extensively with WordPress, and more recently with Craft CMS. My previous work as an Object-Oriented PHP developer with CakePHP, CodeIgniter and Symfony allows me to get the most out of these systems.</p>
              <h3>Sitecore and Umbraco&nbsp;friendly</h3>
              <p>Many of the projects I have worked on in the last few years used a .NET CMS, and I am skilled at working with both Sitecore and Umbraco. I am adept at integrating Razor templates and have a working knowledge of editing controllers and tests.</p>
              <h2>Currently available from May</h2>
              <p>If you&rsquo;re interested in working with me then I&rsquo;d love to hear from you! I&rsquo;m currently available from the start of May 2019. </p>
              <p><a href="mailto:darren@darrenhall.co" className="c-button">Get in touch</a></p>
            </div>
          </main>
        </Layout>
      </>
    )}
  />
)

export default IndexPage
