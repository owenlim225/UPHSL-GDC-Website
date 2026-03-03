import { assets } from '../../constants/assets'
import './Footer.css'

export function Footer() {
  return (
    <footer className="gdc-footer">
      <div className="gdc-footer__inner">
        <div className="gdc-footer__top">
          <div className="gdc-footer__block">
            <p className="gdc-footer__title">Let's connect!</p>
            <p className="gdc-footer__desc">
              Want to be part of our community? Have something in mind?
            </p>
            <div className="gdc-footer__actions">
              <a href="#join" className="gdc-footer__btn">Join us!</a>
              <a href="#contact" className="gdc-footer__btn">Message us!</a>
            </div>
          </div>
          <div className="gdc-footer__block">
            <p className="gdc-footer__title">Keep up with us!</p>
            <p className="gdc-footer__desc">
              Join us on our digital adventures across various platforms!
            </p>
            <div className="gdc-footer__social">
              <a href="#" className="gdc-footer__social-link" aria-label="Facebook">
                <img src={assets.socialFacebook} alt="" aria-hidden />
              </a>
              <a href="#" className="gdc-footer__social-link" aria-label="Twitter">
                <img src={assets.socialTwitter} alt="" aria-hidden />
              </a>
              <a href="#" className="gdc-footer__social-link" aria-label="LinkedIn">
                <img src={assets.socialLinkedIn} alt="" aria-hidden />
              </a>
              <a href="#" className="gdc-footer__social-link" aria-label="Discord">
                <img src={assets.socialDiscord} alt="" aria-hidden />
              </a>
            </div>
          </div>
        </div>
        <div className="gdc-footer__bottom">
          <p className="gdc-footer__copy">All Rights Reserved.</p>
          <p className="gdc-footer__copy">© 2026 UPHSL Game Developers' Club.</p>
        </div>
      </div>
      <div className="gdc-footer__bar" aria-hidden />
    </footer>
  )
}
