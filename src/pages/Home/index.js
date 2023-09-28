import Front from './4635743.jpg'
import ReactImg from './react_logo_1200x640.png'

import './index.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
function home() {
  return (

    <div>
      <div className='perfil'>
        <div className="Container">
          {/* GitHub */}
          <button id='Btn-link'>
            <a href="https://github.com/Jv-Matias"><FaGithub/>GitHub</a>
          </button>
          {/* Linkedin */}
          <button id='Btn-link'>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-martins-62760528b/"><FaLinkedin />Linkedin</a>
          </button>


        </div>
      </div>
  



      {/* // <!-- Carousel --> */}
      <div id="demo" className="carousel slideshow" data-bs-ride="carousel">

        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Front} alt="Front-End" className="d-block w-100" />
            <div className="carousel-caption">
              <h3>Front-End</h3>
              <p>Projeto...Front-End</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src={ReactImg} alt="React" className="d-block w-100" />
            <div className="carousel-caption">
              <h3>React</h3>
              <p>Projeto...React</p>
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
      </div>

  );

}
export default home