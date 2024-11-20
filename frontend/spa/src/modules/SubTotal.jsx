function SubTotal ({product, quantity}){
    
    const total = product.price * quantity;
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD'});
}

export default SubTotal;