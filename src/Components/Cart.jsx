import PropTypes from 'prop-types'

const Cart = ({cart,handleRemoveFromCart}) => {
    const {strCategoryThumb,idCategory}=cart
    return (
        <div>
           <img src={strCategoryThumb} alt=""/> 
           <button onClick={()=>handleRemoveFromCart(idCategory)}>Remove Cart</button>
        </div>
    );
};
Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}
export default Cart;