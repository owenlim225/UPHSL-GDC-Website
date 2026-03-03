import { assets } from '../../constants/assets'
import './Header.css'

export function Header() {
  return (
    <header className="gdc-header" data-node-id="92:2">
      <div className="gdc-header__inner">
        <div className="gdc-header__brand">
          <div className="gdc-header__brand-inner">
            <div className="gdc-header__logo-placeholder" />
            <div className="gdc-header__brand-text">
              <p className="gdc-header__title">UPHSL Game Developers' Club</p>
              <p className="gdc-header__subtitle">University of Perpetual Help System Laguna</p>
            </div>
          </div>
        </div>
        <nav className="gdc-header__nav">
          <div className="gdc-header__links">
            <a href="#home" className="gdc-header__link">Home</a>
            <a href="#events" className="gdc-header__link">Events</a>
            <a href="#project" className="gdc-header__link">Project</a>
            <a href="#team" className="gdc-header__link">Team</a>
            <a href="#join" className="gdc-header__btn">JOIN US</a>
          </div>
          <div className="gdc-header__avatar">
            <img src={assets.avatarPlaceholder} alt="" aria-hidden />
          </div>
        </nav>
      </div>
    </header>
  )
}
