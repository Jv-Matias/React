 import './index.css'
function Game() {
    return (
        <div>
            <div className="Container">

                <button>
                    <i className="fab fa-github"></i>
                    <a href="https://github.com/Jv-Matias/Android-Develpor">GitHub</a>
                </button>

                <button>
                    <i className="fab fa-figma fa-lg"></i>
                    <a href="https://www.figma.com/file/kqoxy1Dn3x648WVmAovyOQ/Untitled?type=design&node-id=2-2&mode=design&t=uk8jHqEmhLX2u63Q-0">Figma</a>
                </button>
                <div className="Container-Video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rLMYbsbuRxk?si=v4noyf4wsfDD9XBO"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

            </div>
        </div>

    )
}

export default Game;