import Img_js from './img_carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/carousel.css'
function Carousel_js({anh})
{
    return(
        <div className="m-3">
            <div className="container justify-content-center m-2 p-2">
                <div className="carousel slide" id='slider'>
                    <div className="carousel-indicators">
                        {anh.map((media,index) => (
                            <button key={media.id} data-bs-target="#slider" data-bs-slide-to={index}  className={index === 0 ? 'active' : ''}></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {anh.map((media, index) => (
                            <div key={media.id} className={`carousel-item ${index === 0 && 'active'}`}>
                                <Img_js sources={media.src} alt={media.alt} />
                            </div>
                        ))}
                    </div>
                    <button className='carousel-control-prev' data-bs-target="#slider" data-bs-slide="prev">
                        <span className='carousel-control-prev-icon'></span>
                        <span className='visually-hidden'></span>
                    </button>
                    <button className='carousel-control-next' data-bs-target="#slider" data-bs-slide="next">
                        <span className='carousel-control-next-icon'></span>
                        <span className='visually-hidden'></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Carousel_js;