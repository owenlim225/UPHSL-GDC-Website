import { assets } from '../../constants/assets'
import './WhatWeDo.css'

export function WhatWeDo() {
  return (
    <section className="gdc-what" id="events" aria-labelledby="what-heading">
      <div className="gdc-what__section-head">
        <p className="gdc-what__sub">From Ideas to Playable Games</p>
        <p className="gdc-what__heading" id="what-heading">What We Do</p>
        <img src={assets.logoUphslGdc} alt="" className="gdc-what__logo" aria-hidden />
      </div>
      <div className="gdc-what__row">
        <div className="gdc-what__placeholder gdc-what__placeholder--1" />
        <div className="gdc-what__placeholder gdc-what__placeholder--2" />
        <div className="gdc-what__placeholder gdc-what__placeholder--3" />
        <div className="gdc-what__placeholder gdc-what__placeholder--4" />
        <div className="gdc-what__placeholder gdc-what__placeholder--5" />
      </div>
      <div className="gdc-what__desc">
        <p className="gdc-what__body">
          Members collaborate on game projects, form teams for competitions, and experiment with mechanics, systems, and ideas in a supportive but challenging environment. Whether you're a beginner learning your first engine or an experienced dev refining your craft, growth happens through building together.
        </p>
      </div>
      <div className="gdc-what__achievements">
        <h2 className="gdc-what__achievements-title">OFF CAMPUS ACHIEVEMENT</h2>
        <div className="gdc-what__cards">
          <div className="gdc-what__card">
            <div className="gdc-what__card-bg">
              <img src={assets.achievementCard} alt="" aria-hidden />
              <div className="gdc-what__card-gradient" aria-hidden />
            </div>
            <div className="gdc-what__card-content">
              <p className="gdc-what__card-big">TOP 8</p>
              <p className="gdc-what__card-name">GameOn! Manila Game Jam</p>
              <p className="gdc-what__card-meta">Kamiyon Studio</p>
              <p className="gdc-what__card-date">21/22/25</p>
            </div>
          </div>
          <div className="gdc-what__card">
            <div className="gdc-what__card-bg">
              <img src={assets.achievementCard} alt="" aria-hidden />
              <div className="gdc-what__card-gradient" aria-hidden />
            </div>
            <div className="gdc-what__card-content">
              <p className="gdc-what__card-big">FINALIST</p>
              <p className="gdc-what__card-name">Globe Hangout Game Changers</p>
              <p className="gdc-what__card-meta">Kamiyon Studio</p>
              <p className="gdc-what__card-date">21/22/25</p>
            </div>
          </div>
          <div className="gdc-what__card">
            <div className="gdc-what__card-bg">
              <img src={assets.achievementCard} alt="" aria-hidden />
              <div className="gdc-what__card-gradient" aria-hidden />
            </div>
            <div className="gdc-what__card-content">
              <p className="gdc-what__card-big">Incubation Stage</p>
              <p className="gdc-what__card-name">GJ+ 24/25</p>
              <p className="gdc-what__card-meta">Kamiyon Studio</p>
              <p className="gdc-what__card-date">21/22/25</p>
            </div>
          </div>
        </div>
        <p className="gdc-what__footer-text">
          Being part of the UPHSL Game Developers Club means gaining real exposure to game development culture and competition.
        </p>
      </div>
    </section>
  )
}
