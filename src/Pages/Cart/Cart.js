import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import carritoVacio from "../../img/empty-cart.jpg";
import remover from "../../img/remove.svg";
import vaciar from "../../img/empty.svg";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";

const Cart = () => {
  const { cart, clear, removerItem } = useContext(CartContext);
  const [totalCarrito, setTotalCarrito] = useState(0);  
  useEffect(() => {
    setTotalCarrito(cart.reduce((a, b) => a + b.total, 0));
  }, [cart]);

  const createOrder = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const querySnap = collection(db, "orders");

    addDoc(querySnap, {
      buyer: {
        name: "Armando Esteban Quito",
        phone: "1155558888",
        email: "aeq@mail.com",
      },
      productos: cart.map((producto) => {
        return {
          nombre: producto.nombre,
          cantidad: producto.cantidad,
          id: producto.id,
          precio: producto.precio,
        };
      }),
      total: cart.reduce((a, b) => a + b.cantidad * b.precio, 0),
    })
      .then((response) => {
        console.log(response.id);
        alert(`Orden creada con ID: ${response.id}`);
        updateStock()
      })
      .catch((error) => console.log(error));
  };

  const updateStock = () => {
    const db = getFirestore()
    cart.forEach((producto) => {
      const querySnap = doc (db, 'productos', producto.id)
      updateDoc(querySnap, {
        stock: producto.stock - producto.cantidad
      })
      .then(() => {})
      .catch((error) => console.log(error))
    });
  }

  return (
    <div className="listadoCarrito">
      {cart.length > 0 && (
        <section>
          <div className="contBotonesCart">
            <form className="formCart">
            <input type="text" placeholder="Nombre" name="nombre" />
            <input type="text" placeholder="telefono" name="telefono" />
            <input type="email" placeholder="email" name="email" />
            <button onClick={createOrder} className="botonesDetalle">
              Finalizar compra
            </button>
            </form>
          </div>
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
                    <img
                      className="imgProdCarrito"
                      src={producto.image}
                      alt=""
                    />
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
              <tr className="blank">
                <td className="blank"></td>
                <td></td>
                <td></td>
                <td className="tablaTotal">Total:</td>
                <td className="tablaTotal currSign">{totalCarrito}</td>
                <td className="campoVaciar">
                  {cart.length > 0 && (
                    <img
                      className="vaciar"
                      onClick={clear}
                      src={vaciar}
                      alt=""
                    />
                  )}{" "}
                  vaciar
                </td>
              </tr>
            </tbody>
          </table>
        </section>
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
