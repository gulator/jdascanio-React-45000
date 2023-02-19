import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import NoLink from "./Pages/NoLink/NoLink";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes className="App-Main">
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/' element={<Logo />} />
        <Route path="/*" element={<NoLink />} />
        <Route path='item/:id' element={<ItemDetailContainer />} />
        <Route path='/categoria/:IDcategoria' element={<ItemListContainer />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
