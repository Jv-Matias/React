import './vanila.css';
function Vanila() {
    return (
        <div>
            <div className="Conjunto">

                <button>
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/Jv-Matias/Front-Developer">GitHub</a>
                </button>


                <div className="Video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nodMw6jJEno?si=sdg5YPXJ-dcdlz2l"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

            </div>
        </div>

    );
}

export default Vanila;