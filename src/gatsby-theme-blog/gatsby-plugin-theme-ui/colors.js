import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a orange theme
 */

const darkOrange = `#FE5E00`
const lightOrange = `#FFA70D`
const orangeGray = `#373737`

export default merge(defaultThemeColors, {
  text: orangeGray,
  primary: darkOrange,
  heading: orangeGray,
  modes: {
    dark: {
      background: orangeGray,
      primary: lightOrange,
      highlight: lightOrange,
    },
  },
})
