import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

import { graphql, Link } from "gatsby"

import PostFooter from "../../src/gatsby-theme-blog/components/post-footer"
import Layout from "../../src/gatsby-theme-blog/components/layout"
import SEO from "../../src/gatsby-theme-blog/components/seo"
import aboutMeImage from "../../content/assets/image-about-me.jpg"
// import { MDXRenderer } from "gatsby-plugin-mdx"

// <MDXRenderer>{post.body}</MDXRenderer>

const Page404 = (props) => {
  console.log(props)
  return (
    <Layout
      location={props.location}
      title={props.data.site.siteMetadata.title}
    >
      <SEO
        title="Página não encontrada - 404"
        description="Parece que você está meio perdido, que tal você ler alguns dos meus
          últimos posts?"
      />
      <main>
        <Styled.h1>Página não encontrada - 404</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 4,
          })}
        >
          Parece que você está meio perdido, que tal você ler alguns dos meus
          últimos posts?
        </Styled.p>
        <Styled.img
          src="https://media.giphy.com/media/6uGhT1O4sxpi8/source.gif"
          css={css({
            width: "100%",
            height: "auto",
            mb: 4,
          })}
        />
        {props.data.allBlogPost.nodes.map((node) => {
          const title = node.title || node.slug
          return (
            <Fragment key={node.slug}>
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={css({
                      textDecoration: `none`,
                    })}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
      </main>
      <PostFooter />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }

    allBlogPost(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        title
        slug
        excerpt
        date
      }
    }
  }
`

export default Page404
