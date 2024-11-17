import OrderQuantity from './OrderQuantity.jsx'




function OrderRow({ product }) {
    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price}</td>
            <OrderQuantity product={product} />
            {/* <td>{product.subtotal}</td> */}
            
        

        </tr >
    )

}

export default OrderRow