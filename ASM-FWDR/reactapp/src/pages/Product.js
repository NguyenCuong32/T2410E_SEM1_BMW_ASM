import Card_js from "../components/card";
function Product_js()
{
    return(
        <div className="container">
            <h1 className="text-success">NVIDIA GeForce RTX 5090</h1>
            <h2>Thay đổi cuộc chơi</h2>
            <p>NVIDIA® GeForce RTX™ 5090 là GPU GeForce mạnh mẽ nhất từng được sản xuất, mang lại khả năng đột phá cho game thủ và nhà sáng tạo. Xử lý các mô hình tiên tiến nhất và khối lượng công việc sáng tạo đầy thách thức với sức mạnh AI chưa từng có. Chơi game với công nghệ ray tracing hoàn chỉnh và độ trễ thấp nhất. GeForce RTX 5090 được trang bị kiến trúc NVIDIA Blackwell và 32GB bộ nhớ GDDR7 siêu nhanh, giúp bạn có thể làm tất cả.</p>
            <Card_js></Card_js>
            <button className="btn btn-primary m-3">Hiện tất cả sản phẩm</button>
        </div>
    );
}
export default Product_js;