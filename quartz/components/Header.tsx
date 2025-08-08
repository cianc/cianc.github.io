import {QuartzComponentConstructor} from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">
          <a class="links-header-item" href="/">About</a>
          <a class="links-header-item" href="/images/resume.pdf">Resume</a>
          </div>
          <hr></hr>
        </div>
      )
    }
  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor