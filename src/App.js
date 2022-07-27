import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import ProductDetail from "./components/productDetail/ProductDetail";
import ProductList from "./components/productList/ProductList";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [productToDisplay, setProductToDisplay] = useState([]);
  async function loadProductsData() {
    await axios.get(`https://fakestoreapi.com/products`).then((response) => {
      setProducts(response.data);
      setProductToDisplay(response.data[0]);
      console.log(response.data);
    });
  }
  useEffect(() => {
    loadProductsData();
  }, []);

  function selectedProduct(selectedProductId) {
    let filteredProduct = products.filter(function (product) {
      return product.id === selectedProductId;
    });
    setProductToDisplay(filteredProduct[0]);
    console.log("filteredproduct", filteredProduct);
    console.log("in parent::", selectedProductId);
  }

  return (
    <div>
      <ProductDetail productToBeDisplayed={productToDisplay} />
      <ProductList productCards={products} displayProduct={selectedProduct} />
    </div>
  );
}

export default App;
