import Game from'./2560x1600_px_minimalism_Pac_Man_retro_Games_video_games-673928.jpg'
import Front from'./4635743.jpg'
import Mobile from './csm_Android_6f69e7ef2a.jpg'
import './index.css'

function home(){
return(
    // <!-- Carousel -->
    <div id="demo" className="carousel slideshow" data-bs-ride="carousel">
  
      {/* <!-- Indicators/dots --> */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>
  
      {/* <!-- The slideshow/carousel --> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Front} alt="Front-End" className="d-block w-100"/>
          <div className="carousel-caption">
            <h3>Front-End</h3>
            <p>Projeto...Front-End</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Mobile} alt="Mobile" className="d-block w-100"/>
          <div className="carousel-caption">
            <h3>Mobile</h3>
            <p>Projeto, Android-Developer</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Game} alt="Game-Developer"
            className="d-block w-100" />
          <div className="carousel-caption">
            <h3>Game-Developer</h3>
            <p>Projeto...Game-Developer</p>
          </div>
        </div>
      </div>
  
      {/* <!-- Left and right controls/icons --> */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
export default home