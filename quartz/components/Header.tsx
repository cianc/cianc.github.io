import {QuartzComponentConstructor} from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
      // Since I moved linkedin/email/github links to the footer, don't need this for now.
      //return (
      //
      //  <div id="links-header-container">
      //  <div id="links-header">
      //  <a class="links-header-item" href="/">About</a>
      //    </div>
      //    <hr></hr>	  
      //  </div>
      //)
    }
  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor