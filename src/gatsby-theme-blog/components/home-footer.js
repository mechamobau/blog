import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    {socialLinks.map((platform, i, arr) => {
      return (
        <Fragment key={platform.url}>
          <FontAwesomeIcon icon={["fab", platform.name]} />
          <Styled.a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            css={css({
              ml: 2,
            })}
          >
            {platform.name[0].toUpperCase() + platform.name.substring(1)}
          </Styled.a>
          {arr.length - 1 !== i && (
            <Styled.div
              css={css({
                ml: 1,
                mr: 1,
                display: "inline-block",
              })}
            >
              &bull;
            </Styled.div>
          )}
        </Fragment>
      )
    })}
  </footer>
)
export default Footer
