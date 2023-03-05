import carrito from "./shopping-cart.svg";
import "./styleCart.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  
  const [total, setTotal] = useState (0)

  useEffect(() => {
    setTotal (cart.reduce ((a, b) => a + b.cantidad, 0 ))
  }, [cart])

  return (
    <div className="contenedor">
      <Link to={"/carrito"}>
        <img className="icon" alt="CartIcon" src={carrito} />
      </Link>
      <h5 className="number">{total}</h5>
    </div>
  );
}
