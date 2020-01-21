import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logoAmnesty from "../images/logo-amnesty.svg"
import logoBupa from "../images/logo-bupa.svg"
import logoCDL from "../images/logo-cdl.svg"
import logoChannelMum from "../images/logo-channelmum.svg"
import logoCoop from "../images/logo-coop.svg"
import logoGoAhead from "../images/logo-goahead.svg"
import logoGoEuro from "../images/logo-goeuro.svg"
import logoHMV from "../images/logo-hmv.svg"
import logoSeeSaw from "../images/logo-seesaw.svg"

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
          <main>
            <section className="c-section">
              <div className="o-wrapper">
                <h1 className="u-visually-hidden">Darren Hall</h1>
                <h2>I&rsquo;m a frontend developer based in Manchester.</h2>
                <p>With over {new Date().getFullYear() - 2004} years of commercial experience I develop responsive, performant and accessible websites using HTML, CSS and JavaScript.</p>
              </div>
            </section>
            <section className="c-section c-section--alt">
              <div className="o-wrapper">
                <h3>Skills</h3>
                <p>For the past two years I have worked almost exlcusively in React, with some Gatsby and Jekyll thrown in too. I have previosly worked extensively in Angular.</p>
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
              </div>
            </section>
            <section className="c-section">
              <div className="o-wrapper">
                <h3>Selected work</h3>
                <p>I&rsquo;ve been fortunate enough to work on some really amazing projects, with great agencies and clients. I&rsquo;ve listed a selection of some of them below.</p>
              </div>
              <div className="o-wrapper c-card c-card--coop">
                <img src={logoCoop} className="c-card__logo c-card__logo--coop" alt="" />
                <h4 className="c-card__title"><a href="https://shifts.coop.co.uk/">Co-op Shifts</a></h4>
                <h5>Staff shift management progressive web app</h5>
                <p>Front-end developer for React application, interfacing with a Java backend. Test-driven development, extensive pair and mob programming. Mentoring and leadership of development team.</p>
              </div>
              <div className="o-wrapper c-card c-card--cdl">
                <img src={logoCDL} className="c-card__logo c-card__logo--cdl" alt="" />
                <h4 className="c-card__title">CDL</h4>
                <h5>White label insurance application site</h5>
                <p>Working with the in-house team on a bespoke Node.js application, allowing the modular construction of&nbsp;insurance application sites by less experienced team members. Used for clients such as Sainsbury's, Swinton and Tesco. Test-driven development.</p>
              </div>
              <div className="o-wrapper c-card c-card--channelmum">
                <img src={logoChannelMum} className="c-card__logo c-card__logo--channelmum" alt="" />
                <h4 className="c-card__title"><a href="https://www.channelmum.com/">Channel Mum</a></h4>
                <h5>Parenting community progressive web app</h5>
                <p>Lead frontend developer for React application, front end process (incluinding test-driven development), architecture and development. Utilises Redux, Algolia and Contenful API.</p>
              </div>
              <div className="o-wrapper c-card c-card--goeuro">
                <img src={logoGoEuro} className="c-card__logo c-card__logo--goeuro" alt="" />
                <h4 className="c-card__title"><a href="https://www.omio.co.uk/">GoEuro (now Omio)</a></h4>
                <h5>Travel aggregator booking site</h5>
                <p>Working with the in-house team to re-factor and re-architecht an Angular application to utilise component structures and a new backend API. Test-driven development. Remote and on-site in Berlin.</p>
              </div>
              <div className="o-wrapper c-card c-card--seesaw">
                <img src={logoSeeSaw} className="c-card__logo c-card__logo--seesaw" alt="" />
                <h4 className="c-card__title"><a href="https://www.netmums.com/info/what-is-the-seesaw-by-netmums-app-all-about">Seesaw by Netmums</a></h4>
                <h5>Activity and event listing app</h5>
                <p>Cross platform (<a href="https://apps.apple.com/gb/app/seesaw-by-netmums/id1214921808">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.netmums.seesawapp">Android</a>) Ionic and Angular app development, also incorporating various map, weather and analytics APIs.</p>
              </div>
              <div className="o-wrapper c-card c-card--goahead">
                <img src={logoGoAhead} className="c-card__logo c-card__logo--goahead" alt="" />
                <h4 className="c-card__title">Go-Ahead Group</h4>
                <h5>Multiple train booking and information sites</h5>
                <p>(London Midland, <a href="https://www.southeasternrailway.co.uk/">Southeastern</a>, <a href="https://www.southernrailway.com/">Southern</a>, <a href="https://www.greatnorthernrail.com/">Great Northern</a>, <a href="https://www.thameslinkrailway.com/">Thameslink</a>, <a href="https://www.gatwickexpress.com/">Gatwick Express</a>)<br />Lead frontend developer for Sitecore project, front end process (incluinding test-driven development), architecture and development, multisite, running 6 themes from a shared codebase.</p>
              </div>
              <div className="o-wrapper c-card c-card--amnesty">
                <img src={logoAmnesty} className="c-card__logo c-card__logo--amnesty" alt="" />
                <h4 className="c-card__title"><a href="https://www.amnesty.org/">Amnesty International</a></h4>
                <h5>Global human rights site</h5>
                <p>Lead frontend developer for Umbraco project, front end process, architecture and development, multi lingual including Arabic right to left layout.</p>
              </div>
              <div className="o-wrapper c-card c-card--bupa">
                <img src={logoBupa} className="c-card__logo c-card__logo--bupa" alt="" />
                <h4 className="c-card__title"><a href="https://www.bupa.co.uk/">Bupa</a></h4>
                <h5>Private healthcare site</h5>
                <p>Rapid prototyping and contributing to creation of component library for new site.</p>
              </div>
              <div className="o-wrapper c-card c-card--hmv">
                <img src={logoHMV} className="c-card__logo c-card__logo--hmv" alt="" />
                <h4 className="c-card__title"><a href="https://www.hmv.com/">HMV</a></h4>
                <h5>Music retailer site</h5>
                <p>Majority of front end development for initial launch of site. I killed Nipper! I was the one who removed Nipper the dog from the HMV logo on the site when they rebranded. Sad times.</p>
              </div>
            </section>
            <section className="c-section c-section--alt">
              <div className="o-wrapper">
                <h2>Currently looking for new opportinities.</h2>
                <p>If you&rsquo;re interested in working with me then I&rsquo;d love to hear from you! I&rsquo;m currently looking for new opportunities in 2020. </p>
                <p><a href="mailto:darren@darrenhall.co" className="c-button">Get in touch</a></p>
              </div>
            </section>
          </main>
        </Layout>
      </>
    )}
  />
)

export default IndexPage
