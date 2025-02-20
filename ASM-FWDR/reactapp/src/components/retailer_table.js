import Retailer_import from './retailer_import';
import retailer from '../jsondata/retailer.json'
function Retailer_tb()
{
    return(
    <div className='m-3'> 
        <table className="table table-striped border">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Chi nhánh</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody className='table-primary border border-primary'>
                {
                    retailer.map((items) => (
                        <Retailer_import id={items.id} R_name={items.R_name} R_address={items.R_address} phonenum={items.phonenum} email={items.email}></Retailer_import>
                    ))
                }
            </tbody>
        </table>
    </div>);
}
export default Retailer_tb;