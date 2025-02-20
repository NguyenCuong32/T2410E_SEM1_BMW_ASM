import Carousel_js from "../components/carousel";
import anh1 from '../jsondata/aboutus.json'
function Aboutus_js()
{
    return(
        <div className="m-2 p-2">
            <h1>Về Chúng Tôi</h1>
            <img className="border shadow m-2 p-2 rounded-2" src='Insideshop2.webp'></img>
            <h4 className="container text-primary-emphasis p-2">Chào mừng bạn đến với Jshop, điểm đến tin cậy cho tất cả các nhu cầu về linh kiện điện tử! Chúng tôi chuyên cung cấp đa dạng các loại linh kiện chất lượng cao, từ vi điều khiển, cảm biến, module nguồn, đến tụ điện, điện trở và nhiều sản phẩm khác phục vụ cho cả DIY, nghiên cứu, học tập và sản xuất.<br></br>Với đội ngũ kỹ thuật giàu kinh nghiệm và sự đam mê công nghệ, chúng tôi không chỉ mang đến sản phẩm tốt nhất mà còn sẵn sàng hỗ trợ tư vấn giúp bạn tìm được giải pháp phù hợp nhất. Cam kết của chúng tôi là đem lại giá cả cạnh tranh, dịch vụ tận tâm và chất lượng đảm bảo.Hãy để Jshop đồng hành cùng bạn trên hành trình sáng tạo và phát triển công nghệ!</h4>
            <div className="container border shadow">
                <Carousel_js anh={anh1}></Carousel_js>
            </div>
        </div>
    );
}
export default Aboutus_js;