import OrderQuantity from './OrderQuantity.jsx'




function OrderRow({ product }) {

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</td>
            <OrderQuantity product={product} />

            
        

        </tr >
    )

}

export default OrderRow