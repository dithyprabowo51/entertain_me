import React from 'react'
import AvengersBanner from '../../assets/avengers_banner.png'
import FinnestBanner from '../../assets/finnest_banner.jpeg'

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={AvengersBanner} className="d-block w-100" height="600px" alt="carousel" />
        </div>
        <div className="carousel-item">
          <img src={FinnestBanner} className="d-block w-100" height="600px" alt="carousel" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel