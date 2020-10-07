import React from "react"
import { Styled, css } from "theme-ui"

import { graphql } from "gatsby"

import PostFooter from "../../src/gatsby-theme-blog/components/post-footer"
import Layout from "../../src/gatsby-theme-blog/components/layout"
import SEO from "../../src/gatsby-theme-blog/components/seo"
import aboutMeImage from "../../content/assets/image-about-me.jpg"
// import { MDXRenderer } from "gatsby-plugin-mdx"

// <MDXRenderer>{post.body}</MDXRenderer>

const About = (props) => {
  return (
    <Layout
      location={props.location}
      title={props.data.site.siteMetadata.title}
    >
      <SEO title="Sobre mim" />
      <main>
        <Styled.h1>Sobre mim</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3,
          })}
        >
          Um pouco sobre minha vida, universo e tudo mais
        </Styled.p>
        <Styled.p>Olá! 👋</Styled.p>
        <Styled.p>
          O meu nome é Lucas Viana, mais conhecido como Baú. Sou nascido das
          grandes terras do Chorão (aka. Santos/SP), ou seja um caiçara nato.
          Sou <strike>pintor de pixels em telas de cristal líquido</strike>{" "}
          desenvolvedor front-end há aproximadamente de 3 anos, tendo
          trabalhando em empresas de diferentes tipos e tamanhos, tais como
          agências de publicidade, startups e empresas de médio porte a grande
          porte.
        </Styled.p>
        <Styled.img
          src={aboutMeImage}
          alt="Na imagem estou eu focado escrevendo em um laptop com muitos adesivos na tampa"
        />
        <Styled.p>
          Atualmente estou cursando Sistemas para Internet na Fatec Rubens Lara,
          onde faço parte de um grupo de pesquisas sobre a usabilidade do site
          oficial da linguagem Haskell. Sou apaixonado desde pequeno por
          computadores, isso devido ao fato de meu pai ter sido dono de uma lan
          house na época do boom das lan houses. Vale ressaltar que claro, esta
          lan house não existe mais rs.
        </Styled.p>
        <Styled.p>
          Sou apaixonado desde pequeno por computadores, isso devido ao fato de
          meu pai ter sido dono de uma lan house na época do boom das lan
          houses. Vale ressaltar que claro, esta lan house não existe mais rs.
        </Styled.p>
        <Styled.p>
          Se você quiser entrar em contato comigo, minha DM do{" "}
          <Styled.a href="https://twitter.com/mechamobau" target="_blank">
            Twitter
          </Styled.a>{" "}
          está sempre aberta para conversas sobre qualquer coisa, fique a
          vontade para me chamar!
        </Styled.p>
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
  }
`

export default About
