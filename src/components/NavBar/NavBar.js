import CartWidget from "../../components/CartWidget/CartWidget";
import "./styleNav.css";
import { NavLink, Link } from "react-router-dom";
import './styleNav.css'
import Logo from "../Logo/Logo";
import { useContext } from "react";
import CartProvider from "../../context/CartProvider";
import { CartContext } from "../../context/CartContext";

export default function NavBar() {
 
  return (
    <div className="App-header">
      <Link to={'/'}>
      <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'activa' : 'inactiva'} to={"/"}>Todos</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'activa' : 'inactiva'} to={"/categoria/tinto"}>Tintos</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'activa' : 'inactiva'} to={"/categoria/blanco"}>Blancos</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'activa' : 'inactiva'} to={"/categoria/rose"}>Rose</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'activa' : 'inactiva'} to={"/categoria/espumante"}>Espumantes</NavLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
}
