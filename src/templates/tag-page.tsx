import React, {StatelessComponent} from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"

const TagPage: StatelessComponent<{
  data: any
  location: any
  pageContext: any
}> = ({data, location, pageContext}) => {
  const posts = data.allMdx.edges.map(x => x.node)
  const title = data.site.siteMetadata.title

  return (
    <Layout location={location}>
      <SEO title={`Posts tagged ${pageContext.tag} | ${title}`} />
      <h2>
        {data.allMdx.totalCount} posts tagged with "
            {pageContext.tag}"
          </h2>
      <PostPreview posts={posts} />
      <div>
        <Link to={"/blog/tags"}>Browse All Tags</Link>
      </div>
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] }, draft: { ne: true } }
        fileAbsolutePath: { regex: "^/blog/" }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date: createdAt(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
            created: date(formatString: "MMMM DD, YYYY")
            byline
          }
        }
      }
    }
  }
`
