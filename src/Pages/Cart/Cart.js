import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import carritoVacio from "../../img/empty-cart.jpg";
import remover from "../../img/remove.svg";
import vaciar from "../../img/empty.svg";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";

const Cart = () => {
  const { cart, clear, removerItem } = useContext(CartContext);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    setTotalCarrito(cart.reduce((a, b) => a + b.total, 0));
  }, [cart]);

  const createOrder = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const querySnap = collection(db, "orders");

    if (!formValue.name || !formValue.phone || !formValue.email){
      alert('complete todos los campos para finalizar la compra')
    }else{
      addDoc(querySnap, {
        buyer: {
          name: formValue.name,
          phone: formValue.phone,
          email: formValue.email,
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
          alert(`Orden creada con ID: ${response.id}`);
          updateStock(db);
        })
        .catch((error) => console.log(error));

    }

  };

  const updateStock = (db) => {
    cart.forEach((producto) => {
      const querySnap = doc(db, "productos", producto.id);
      updateDoc(querySnap, {
        stock: producto.stock - producto.cantidad,
      })
        .then(() => {})
        .catch((error) => console.log(error));
    });
  };

  const datosUsuario = (e) => {
    console.log (e.target.value)
    setFormValue ({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  };
  return (
    <div className="listadoCarrito">
      {cart.length > 0 && (
        <section>
          <div className="contBotonesCart">
            <form className="formCart">
              <input
                className="cartInput"
                type="text"
                placeholder="Nombre"
                value={formValue.name}
                onChange={datosUsuario}
                name="name"
              />
              <input
                className="cartInput"
                type="text"
                placeholder="telefono"
                value={formValue.phone}
                onChange={datosUsuario}
                name="phone"
              />
              <input
                className="cartInput"
                type="email"
                placeholder="email"
                value={formValue.email}
                onChange={datosUsuario}
                name="email"
              />
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
