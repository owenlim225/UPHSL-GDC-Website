import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre'
import { WhatWeDo } from '../components/WhatWeDo/WhatWeDo'
import { TeamCarousel } from '../components/TeamCarousel/TeamCarousel'
import { Gallery } from '../components/Gallery/Gallery'
import { Faq } from '../components/Faq/Faq'
import { Footer } from '../components/Footer/Footer'
import './Home.css'

export default function Home() {
  return (
    <div className="home" data-name="HOME" id="home">
      <Header />
      <main className="home__main">
        <section className="home__hero-wrap">
          <Hero />
        </section>
        <section className="home__who">
          <WhoWeAre />
        </section>
        <section className="home__what">
          <WhatWeDo />
        </section>
        <section className="home__team">
          <TeamCarousel />
        </section>
        <section className="home__gallery">
          <Gallery />
        </section>
        <section className="home__faq">
          <Faq />
        </section>
      </main>
      <Footer />
    </div>
  )
}
