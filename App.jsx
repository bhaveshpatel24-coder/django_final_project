import { Provider } from "react-redux";
import "./App.css";
import CartItem from "./src/components/CartItem";
import ProductList from "./src/components/ProductList";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <section className="landing" aria-labelledby="landing-title">
          <div className="landing__content">
            <p className="landing__eyebrow">Welcome to</p>
            <h1 id="landing-title">Paradise Nursery</h1>
            <p className="landing__description">
              Bring the beauty of nature into your home.
            </p>
            <a className="landing__button" href="#plants">
              Get Started
            </a>
          </div>
        </section>
        <ProductList />
        <CartItem />
      </div>
    </Provider>
  );
}
