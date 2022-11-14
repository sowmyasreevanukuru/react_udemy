import { Link } from "react-router-dom";
const Product = () => {
  return (
    <section>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link to="/product/p1">Book</Link>
        </li>
        <li>
          <Link to="/product/p2">Laptop</Link>
        </li>
        <li>
          <Link to="/product/p3">Watch</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
