// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let amount = 0

      cartList.forEach(eachItem => {
        amount += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cartsummary-cont">
          <div className="desc-cont">
            <h1 className="totla-amt">
              Order Total: <span className="amt">RS {amount}/-</span>
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
