import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartSlice";

const categories = [
  {
    name: "Air-Purifying Plants",
    products: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        description: "A hardy, sculptural plant suited to bright or low-light rooms.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "peace-lily",
        name: "Peace Lily",
        description: "Elegant green foliage and graceful white blooms.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    name: "Low-Maintenance Favorites",
    products: [
      {
        id: "zz-plant",
        name: "ZZ Plant",
        description: "Glossy leaves bring an easy-care touch of green indoors.",
        price: 27.5,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "golden-pothos",
        name: "Golden Pothos",
        description: "A trailing favorite that adds leafy texture to shelves.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    name: "Statement Plants",
    products: [
      {
        id: "monstera",
        name: "Monstera Deliciosa",
        description: "A dramatic tropical plant with iconic split leaves.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1616479779743-9a5e9d6d7f4c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "rubber-plant",
        name: "Rubber Plant",
        description: "Bold, glossy foliage makes a striking room centerpiece.",
        price: 34.5,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="product-listing" id="plants">
      <header className="product-listing__header">
        <div>
          <p className="product-listing__eyebrow">Paradise Nursery</p>
          <h1>Find your perfect plant</h1>
          <p>Bring a little more green into your home.</p>
        </div>
        <p className="product-listing__cart" aria-live="polite">
          Cart <span>{itemCount}</span>
        </p>
      </header>

      {categories.map((category) => (
        <section
          className="product-category"
          key={category.name}
          aria-labelledby={`${category.name.replaceAll(" ", "-")}-title`}
        >
          <h2 id={`${category.name.replaceAll(" ", "-")}-title`}>
            {category.name}
          </h2>
          <div className="product-grid">
            {category.products.map((product) => {
              const isInCart = cartItems.some((item) => item.id === product.id);

              return (
                <article className="product-card" key={product.id}>
                  <img
                    className="product-card__image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <div className="product-card__body">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="product-card__price">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(product.price)}
                    </p>
                    <button
                      type="button"
                      className="product-card__button"
                      disabled={isInCart}
                      onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
                    >
                      {isInCart ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
