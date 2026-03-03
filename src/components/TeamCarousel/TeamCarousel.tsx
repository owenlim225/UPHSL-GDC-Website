import { assets } from '../../constants/assets'
import './TeamCarousel.css'

export function TeamCarousel() {
  return (
    <section className="gdc-team" id="team" aria-labelledby="team-heading">
      <div className="gdc-team__carousel" aria-hidden>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="gdc-team__carousel-item">
            <img src={assets.carouselVector} alt="" />
          </div>
        ))}
      </div>
      <div className="gdc-team__cta">
        <p className="gdc-team__title" id="team-heading">
          A DEFINITIVE
          <br />
          EDITION TEAM
        </p>
        <a href="#join" className="gdc-team__btn">MEET THE TEAM</a>
      </div>
    </section>
  )
}
