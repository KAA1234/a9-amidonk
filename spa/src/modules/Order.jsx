import OrderRow from './OrderRow.jsx'


function Order({ products }) {
    return (
        <>

            <h2>Order</h2>
            <article>
                <p>Provide information about yourself and submit orders below.</p>
                <form action="/order" method="POST">
                    <fieldset>
                        <legend>Provide information about yourself</legend>

                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required autofocus placeholder="John Smith"></input>

                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" required placeholder="john.smith@gmail.com"></input>

                        <label for="address">Provide your address</label>
                        <textarea rows="2" id="address" name="address" required
                            placeholder="123 Sesame Stree, New York, NY 123456"></textarea>

                        <label for="delivery">Provide your delivery instructions</label>
                        <textarea rows="4" id="delivery" name="delivery" required
                            placeholder="Hide behind lawn nomes"></textarea>

                    </fieldset>
                    <fieldset>
                        <legend>Select your order below</legend>
                        <table>
                            <caption>Choose one item and set the quantity</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>

                                {products.map((product, i) =>
                                    <OrderRow
                                        product={product}
                                        key={i}
                                        
                                    />)}
                                    </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="3">Current Total

                                        </th>
                                    </tr>
                                </tfoot>
                        </table>
                    </fieldset>
                </form>
            </article>

        </>
    )
}

export default Order;