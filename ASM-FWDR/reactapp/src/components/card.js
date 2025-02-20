import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import items from '../jsondata/img_card.json'
import Img_card from './img_card';
function Card_js()
{
    return(
        <div className='p-2 row d-flex'>
        {items.map(items => (
            <div className='col-md-6 mb-4 col' key={items.id}>
                <Card className='border border-primary-subtle' style={{width:"35rem"}}>
                    <Img_card sources={items.src} alt={items.alt}/>
                    <Card.Body>
                        <Card.Title className='text-danger'>{items.title}</Card.Title>
                        <Card.Text><b>{items.price} VND</b> </Card.Text>
                        <Button variant='primary'>MUA NGAY</Button>
                    </Card.Body>
                </Card>
            </div>
        ))}
        </div>
    );
}
export default Card_js;