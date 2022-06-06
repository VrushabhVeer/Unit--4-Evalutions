import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          {/* <Route path="/Product" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/> */}
        </Routes> 
    </div>
  );
}

export default App;
