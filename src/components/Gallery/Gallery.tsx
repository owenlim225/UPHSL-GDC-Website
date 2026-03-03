import './Gallery.css'

export function Gallery() {
  return (
    <section className="gdc-gallery" id="gallery" aria-labelledby="gallery-heading">
      <h2 className="gdc-gallery__heading" id="gallery-heading">GALLERY</h2>
      <div className="gdc-gallery__grid">
        <div className="gdc-gallery__slot" />
        <div className="gdc-gallery__slot" />
        <div className="gdc-gallery__slot" />
      </div>
    </section>
  )
}
