import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar';
import ProductList from './Components/ProductList.js';
import Footer from './Components/Footer.js'

function App() {
  const products =[
    {
      price: 200,
      name: "IPhone Pro Max",
      quantity: 20
    },

    {
      price: 300,
      name: "IPhone X",
      quantity: 30
    }
  ]
  return (
   <>
   <Navbar/>
   <ProductList products={products} />
   {/* <Footer/> */}
   </>
  );
}

export default App;
