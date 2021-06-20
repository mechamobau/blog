import React from "react"
import Image from "gatsby-image"
import { css } from "theme-ui"

const Hero = (props) => {
  const {
    post,
  } = props;

  return (
  <>
    {post?.image?.childImageSharp && (
      <Image
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
        css={css({
          borderRadius: 4,
          mb: 4,
        })}
      />
    )}
  </>
)}

export default Hero
