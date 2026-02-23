// import Footer from "./Components/Footer/Footer";
// import NavBar from "./Components/Header/NavBar";
// import Cart from "./Components/Cart/Cart";
// import { useState } from "react";
// import Products from "./Components/products/Products";
// import CartProvider from "./Context/CartProvider";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./Components/Pages/About";
// import Home from "./Components/Pages/Home";

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//   return (
//     <CartProvider>
//       <BrowserRouter>
        
//         <NavBar onShowCart={showCartHandler} />

//         {cartIsShown && <Cart onClose={hideCartHandler} />}

//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={<Products />} />
//           <Route path="/about" element={<About />} />
//         </Routes>

//         <Footer />

//       </BrowserRouter>
//     </CartProvider>
//   );
// }

// export default App;

import Movies from "./Movies/Movies";
function App(){
  return(
    <Movies />
  )
}
export default App;