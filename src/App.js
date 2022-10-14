import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Footer from './Component/Footer.js'

function App() {
  const products = [
    {
      name : "IPhone",
      price : 99999,
      qulity : 0,
    },
    {
      name : "Samsung",
      price : 9999,
      qulity : 0,
    },
    {
      name : "MI",
      price : 1999,
      qulity : 0,
    }
  ]
  let [productList,setProductList] = useState(products);
  let [totalAmount,setTotalAmount] = useState(0);
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  const incrementQuantity=(index)=>{
      productList[index].qulity++;
      newTotalAmount += newProductList[index].price;
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
  }
  const decrementQuantity=(index)=>{
    if (productList[index].qulity>0) {
      productList[index].qulity--;
    newTotalAmount -= newProductList[index].price; 
    }  
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
}

    const reset=()=>{
    newProductList.map((products)=>{
      products.qulity = 0;
    })
      setProductList(newProductList);
      setTotalAmount(0);
    }

  return (
    <React.Fragment>
      <Navbar />
      <main className='Container m-5'>
      <ProductList productList = {productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
      </main>
      <Footer totalAmount={totalAmount} reset={reset}/>
    </React.Fragment>
  );
}

export default App;
