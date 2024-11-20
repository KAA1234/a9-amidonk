import { useState } from 'react';
import { GoChevronDown, GoPlus } from 'react-icons/go'
import SubTotal from './SubTotal.jsx';

function OrderQuantity({ product }) {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        if (quantity === 100) {
            setQuantity(100)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity === 0) {
            setQuantity(0)
        } else {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <div class="clicker" >
                <i><GoChevronDown onClick={decrement} /> </i>
                {quantity}
                <i><GoPlus onClick={increment} /> </i>
            </div >
            <td><SubTotal 
            product={product}
            quantity={quantity}/></td>
        </>

    )
}

export default OrderQuantity;