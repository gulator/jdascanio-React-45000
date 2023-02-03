import carrito from "./shopping-cart.svg";
import './styleCart.css'
export default function CartWidget() {
  return (
    <div className="contenedor">
      <img className="icon"        
        alt="CartIcon"
        src={carrito}
      />
      <h5 className="number">2</h5>
    </div>
  );
}
