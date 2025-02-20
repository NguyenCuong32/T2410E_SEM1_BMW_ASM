import Carousel_js from '../components/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import anh from '../jsondata/img.json'
function Home_js()
{
    return(
        <div className="m-3">
            <div className="container">
                <div className="col-6">
                    <h1>Chào mừng bạn đã đến với JShop</h1>
                </div>
                <Carousel_js anh={anh}></Carousel_js>
                <Button variant='outline-danger' size='lg'>Đặt hàng ngay hôm nay!</Button>
            </div>
        </div>
    );
}
export default Home_js;