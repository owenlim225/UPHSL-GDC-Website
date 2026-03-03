import { assets } from '../../constants/assets'
import './Hero.css'

export function Hero() {
  return (
    <section className="gdc-hero" aria-label="Hero and highlights">
      <div className="gdc-hero__grid">
        <div className="gdc-hero__left">
          <div className="gdc-hero__left-top">
            <img src={assets.logoUphslGdc} alt="UPHSL GDC" className="gdc-hero__logo-uphsl" />
            <p className="gdc-hero__tagline">
              The premier game development organization of the University of Perpetual Help System Laguna
            </p>
          </div>
          <div className="gdc-hero__left-bot">
            <div className="gdc-hero__card-inner" />
            <img src={assets.pixiePose4} alt="" className="gdc-hero__pixie-bot" aria-hidden />
          </div>
        </div>
        <div className="gdc-hero__mid">
          <img src={assets.logoGdc} alt="GDC Official Logo" className="gdc-hero__logo-gdc" />
        </div>
        <div className="gdc-hero__right">
          <div className="gdc-hero__card gdc-hero__card--top">
            <img src={assets.logoGdc} alt="" className="gdc-hero__card-logo" aria-hidden />
            <p className="gdc-hero__time">6:28 AM</p>
            <p className="gdc-hero__date">Saturday, January 3, 2026</p>
          </div>
          <div className="gdc-hero__card gdc-hero__card--mid">
            <p className="gdc-hero__card-title">STAR PROJECT OF THE MONTH</p>
            <p className="gdc-hero__card-value">ANAK: EXAMPLE</p>
            <p className="gdc-hero__card-meta">Team Kabuyao</p>
            <p className="gdc-hero__card-pts">67 PTS</p>
          </div>
          <img src={assets.img1385} alt="" className="gdc-hero__img-overlay" aria-hidden />
          <div className="gdc-hero__card gdc-hero__card--bot">
            <p className="gdc-hero__card-title">STAR MEMBER OF THE MONTH</p>
            <p className="gdc-hero__card-value">Christian Jude Villaber</p>
            <p className="gdc-hero__card-meta">3rd Year - BSIT-GD</p>
            <p className="gdc-hero__card-pts">100 PTS</p>
          </div>
          <img src={assets.yukiGraduation} alt="" className="gdc-hero__yuki-grad" aria-hidden />
        </div>
      </div>
      <div className="gdc-hero__partners">
        <div className="gdc-hero__partner">
          <div className="gdc-hero__partner-box" />
          <p className="gdc-hero__partner-name">UPHSL</p>
        </div>
        <div className="gdc-hero__partner">
          <div className="gdc-hero__partner-box" />
          <p className="gdc-hero__partner-name">CCS</p>
        </div>
        <div className="gdc-hero__partner">
          <div className="gdc-hero__partner-box" />
          <p className="gdc-hero__partner-name">AWS</p>
        </div>
        <div className="gdc-hero__partner">
          <div className="gdc-hero__partner-box" />
          <p className="gdc-hero__partner-name">JPCS</p>
        </div>
      </div>
    </section>
  )
}
