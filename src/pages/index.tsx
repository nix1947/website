import React, {StatelessComponent} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import GatsbyImage from 'gatsby-image';
import {Links as L} from '../components/links';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  @media(max-width: 700px) {
    display: none;
  }


  position: relative;

  > div {
    clip-path: polygon(5% 3%,96% 1%,97% 93%,11% 96%);
  }

  :after, :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1ca086;
    z-index: -1;
  }

  :after {
    clip-path: polygon(3% 2%,98% 2%,95% 92%,9% 92%);
    opacity: 0.5;
  }

  :before {
    clip-path: polygon(7% 0, 100% 4%, 92% 93%, 7% 90%);
    opacity: 0.25;
  }

`;

const Links = styled(L)`
  @media(max-width: 700px) {
    display: none;
  }
`;

export const Home: StatelessComponent<{data: any, location: any}> = ({data, location}) => {
  return (
    <Layout location={location}>
      <SEO
        title="Hello!"
        keywords={[`gatsby`, `javascript`, `react`, `clipchamp`]}
      />
      <ProfileContainer>
        <GatsbyImage fixed={data.sideImage.childImageSharp.fixed} />
      </ProfileContainer>
      <div>
        <About />
        <Links />
      </div>
    </Layout>
  )
}

export default Home;

export const pageQuery = graphql`
  query {
    sideImage: file(absolutePath: { regex: "/bennett.jpg/" }) {
      childImageSharp {
        fixed(width: 280, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
