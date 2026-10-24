import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../CartSlice";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="shopping-cart" id="shopping-cart" aria-labelledby="cart-title">
      <div className="shopping-cart__header">
        <div>
          <p className="product-listing__eyebrow">Your Paradise Nursery order</p>
          <h2 id="cart-title">Shopping Cart</h2>
          <p>{itemCount} {itemCount === 1 ? "item" : "items"}</p>
        </div>
        <a className="shopping-cart__continue" href="#plants">
          Continue shopping
        </a>
      </div>

      {cartItems.length === 0 ? (
        <div className="shopping-cart__empty">
          <p>Your cart is empty.</p>
          <a className="landing__button" href="#plants">Browse plants</a>
        </div>
      ) : (
        <>
          <ul className="shopping-cart__items">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <img className="cart-item__image" src={item.image} alt={item.name} />
                <div className="cart-item__details">
                  <h3>{item.name}</h3>
                  <p>{currency.format(item.price)} each</p>
                  <button
                    className="cart-item__remove"
                    type="button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item__quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity</label>
                  <div className="quantity-control">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                    >
                      −
                    </button>
                    <output id={`quantity-${item.id}`}>{item.quantity}</output>
                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <strong className="cart-item__total">
                  {currency.format(item.price * item.quantity)}
                </strong>
              </li>
            ))}
          </ul>

          <div className="shopping-cart__summary">
            <p>Subtotal <strong>{currency.format(subtotal)}</strong></p>
            <p className="shopping-cart__note">Shipping and taxes calculated at checkout.</p>
            <button type="button" className="product-card__button" disabled>
              Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}
