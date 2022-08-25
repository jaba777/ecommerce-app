import React,{useState} from 'react';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {

  const [express,setExpress] = useState([]);

  const addHandler= (item)=>{
    const finder = express.find((x)=>x.id === item.id);
    if(finder){
      setExpress(express.map((x)=> x.id === item.id ? {...finder, qty: finder.qty+1} : x))
    } else{
      setExpress([...express,{...item,qty: 1}])
    }
  }

  const removeHandler=(item)=>{
    const finder = express.find((x)=> x.id === item.id);
    if(finder.qty ===1){
      setExpress(express.filter((x)=> x.id !== item.id));
    } else{
      setExpress(express.map((x)=> x.id === item.id ? {...finder, qty: finder.qty-1} : x))
    }
  }

  const deleteHandler=(item)=>{
    setExpress(express.filter((x)=> x.id !== item.id));
  }


  return (
    <>
    <Navbar express={express} />
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart express={express} addHandler={addHandler} removeHandler={removeHandler} deleteHandler={deleteHandler} />} />
      <Route path='/product/:id' element={<Product addHandler={addHandler} />} />
    </Routes>
    </>
  );
}

export default App;
