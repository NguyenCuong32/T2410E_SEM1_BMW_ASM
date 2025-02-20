import Retailer_tb from "../components/retailer_table";
import Alert from 'react-bootstrap/Alert';
function Retailer_js()
{
    return(
        <div>
            <div className="justify-content-evenly d-flex m-4 px-4">
                <Alert className="m-2 p-2" style={{width:"30rem"}} variant='info'>
                    <Alert.Heading>Mẹo: Vì sao bạn phải đến JShop?</Alert.Heading>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
                    <hr/>
                    <p className="mb-0">"Văn bản tạm vì không biết viết gì :)"</p> 
                </Alert> 
                <img src="Insideshop.webp"></img>
            </div>
            <h1>Danh sách các chi nhánh/đại lí được ủy quyền chính hãng của JShop.com:</h1>
            <Retailer_tb></Retailer_tb>
            <h3 className="p-3 text-danger-emphasis">Chúng tôi sẽ tiếp tục mở rộng chi nhánh trong tương lai. Stay tune!</h3>
        </div>
    );
}
export default Retailer_js;