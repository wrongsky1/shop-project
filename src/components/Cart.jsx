import {useContext} from 'react'
import {ShopContext} from '../context/context'

function Cart (){
    const {order = 0, handleBasketShow = Function.prototype} = useContext(ShopContext);
    const quantity = order.length;

    return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
    );
}
export{Cart}