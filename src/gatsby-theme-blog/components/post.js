import React from "react"
import { Styled, css } from "theme-ui"
import Image from "gatsby-image"
import PostFooter from "../components/post-footer"
import PostHero from "../components/post-hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 2,
        })}
      >
        {post.date}
      </Styled.p>
      <PostHero post={post} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
