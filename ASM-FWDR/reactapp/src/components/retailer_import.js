function Retailer_import(items)
{
    return(
        <tr>
            <th scope='row'>{items.id}</th>
            <td>{items.R_name}</td>
            <td>{items.R_address}</td>
            <td>{items.phonenum}</td>
            <td style={{color:"blue", textDecoration:"underline"}}>{items.email}</td>
        </tr>
    );
}
export default Retailer_import;