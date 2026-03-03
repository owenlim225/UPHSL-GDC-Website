import { assets } from '../../constants/assets'
import './WhoWeAre.css'

export function WhoWeAre() {
  return (
    <section className="gdc-who" id="about" aria-labelledby="who-heading">
      <div className="gdc-who__section-head">
        <p className="gdc-who__heading" id="who-heading">Who we are</p>
        <p className="gdc-who__sub">Student Game Developers Who Actually Build</p>
      </div>
      <div className="gdc-who__banner">
        <img src={assets.heroPhoto} alt="GDC community" className="gdc-who__banner-img" />
        <div className="gdc-who__banner-shadow" aria-hidden />
      </div>
      <div className="gdc-who__three">
        <div className="gdc-who__card gdc-who__card--left">
          <p className="gdc-who__body">
            Even as students, we go beyond coursework creating original games, joining competitive game jams and hackathons, and showing up to real-world tech & game development events.
          </p>
          <img src={assets.yuki2d} alt="" className="gdc-who__char" aria-hidden />
          <div className="gdc-who__label">
            <p className="gdc-who__label-title">2D PIXIE YUKIMURA</p>
            <p className="gdc-who__label-role">GDC Ambassador</p>
          </div>
        </div>
        <div className="gdc-who__card gdc-who__card--mid">
          <p className="gdc-who__mid-title">
            The premier game development organization of the University of Perpetual Help System Laguna
          </p>
          <div className="gdc-who__mid-body">
            <p className="gdc-who__body">
              We are a growing community of student developers driven by one thing:
              <br />
              making games, not just talking about them.
            </p>
            <p className="gdc-who__body">Our identity is rooted in our motto:</p>
            <p className="gdc-who__motto">Create. Compete. Connect.</p>
          </div>
          <a href="#project" className="gdc-who__btn">LOOK AT OUR PROJECTS!</a>
        </div>
        <div className="gdc-who__card gdc-who__card--right">
          <div className="gdc-who__right-top">
            <img src={assets.pixiePose1} alt="" className="gdc-who__pixie" aria-hidden />
            <div className="gdc-who__label">
              <p className="gdc-who__label-title">3D PIXIE YUKIMURA</p>
              <p className="gdc-who__label-role">GDC Ambassador</p>
            </div>
          </div>
          <div className="gdc-who__right-bot">
            <p className="gdc-who__body">
              our members bring more than just game development skills many are also content creators, 3D modelers, animators, & musicians, contributing diverse strengths that enrich our projects and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
