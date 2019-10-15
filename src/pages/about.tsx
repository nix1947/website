import React, {StatelessComponent} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import A from '../components/about';
import Bio from '../components/bio';

export const About: StatelessComponent<{location: any}> = ({location}) => (
  <Layout location={location}>
    <SEO
      title="About"
      keywords={[`about`, `Manoj`, `Gautam`, `software engineer`, `developer`]}
    />

    <h1>About</h1>

    <A />

    <br />

    <p>
      My name is Manoj Gautam and I grew up in Gulmi Jubhung, Hilmi. 
        </p>
    

    <h3>Stuff I Work With</h3>

    <ul>
      <li> Data Driven Scalable web application(Python/Django, Javascript, Elastic)</li>
      <li>Linux</li>
      <li>Teaching/Mentoring</li>
    </ul>

    <h3>Languages I Love</h3>

    <ul>
      <li>Python</li>
    </ul>

    <h3></h3>
    <Bio isAmp={false} />
  </Layout>
);

export default About;
