import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import NoLink from "./Pages/NoLink/NoLink";
import Logo from "./components/Logo/Logo";
import Cart from "./Pages/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter className="App">
      <CartProvider>
        <NavBar />
        <Routes className="App-Main">
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/" element={<Logo />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route element={<NoLink />} />
          <Route path="/categoria/:IDcategoria" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NoLink />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
