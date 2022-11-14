import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./components/pages/Welcome";
import Product from "./components/pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/pages/ProductDetail";

//register routes

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product-detail/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
