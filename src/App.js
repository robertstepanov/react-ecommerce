import React, { useState, useEffect } from 'react';

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import { commerce } from './lib/commerce';
import { Products, Navbar, Landing } from './components';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div>
      <Landing />
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
