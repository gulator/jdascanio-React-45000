import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import carritoVacio from "../../img/empty-cart.jpg";
import remover from "../../img/remove.svg";
import vaciar from "../../img/empty.svg";

const Cart = () => {
  const { cart, clear, removerItem } = useContext(CartContext);
  const [ totalCarrito, setTotalCarrito ] = useState(0);

  useEffect(() => {
    setTotalCarrito(cart.reduce((a, b) => a + b.total, 0));
  }, [cart]);

  return (
    <div className="listadoCarrito">
      {cart.length > 0 && (
        <table>
          <thead>
            <tr>
              <th className="tablaTotal"></th>
              <th className="tablaTotal">Producto</th>
              <th className="tablaTotal">Cant.</th>
              <th className="tablaTotal">P. Unitario</th>
              <th className="tablaTotal">Subtotal</th>
              <th className="tablaTotal"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((producto) => (
              <tr key={producto.id}>
                <td>
                  <img className="imgProdCarrito" src={producto.image} alt="" />
                </td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td className="currSign">{producto.precio}</td>
                <td className="currSign">{producto.total}</td>
                <td>
                  <img
                    className="removeItem"
                    onClick={() => removerItem(producto.id)}
                    src={remover}
                    alt=""
                  />
                </td>
              </tr>
              // <div key={producto.id} className="itemCarrito">
              //   <img className="imgProdCarrito" src={producto.image} alt=""/>
              //   <h3>{producto.nombre}</h3>
              //   <h4>{producto.cantidad}</h4>
              //   <img className="removeItem" onClick={()=> removerItem (producto.id)} src={remover} alt=""/>
              // </div>
            ))}
            
            <th></th>
            <th></th>
            <th></th>
            <th className="tablaTotal">Total:</th>
            <th className="tablaTotal currSign">{totalCarrito}</th>
            <th className="campoVaciar">{cart.length > 0 && <img className="vaciar" onClick={clear} src={vaciar} alt=''/>} vaciar</th>            
          </tbody>
        </table>
      )}
      {cart.length === 0 && (
        <div className="carroVacio">
          Carrito vacio
          <img src={carritoVacio} alt="" />
        </div>
      )}
    </div>
  );
};

export default Cart;
