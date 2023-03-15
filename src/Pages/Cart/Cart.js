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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

  const orderSaved = ({ response }) => {
    const MySwal = withReactContent(Swal);

    const itemsComprados = cart.map((producto) => {
      let detalleProducto = `${producto.nombre} x ${producto.cantidad} u.<br>`;
      return detalleProducto;
    });
    MySwal.fire({
      position: "center",
      icon: "success",
      title: `Se ha procesado tu compra con ID: ${response.id}`,
      html: `<h3>Tu compra:</h3><h4>${itemsComprados}</h4><h3>Total: $ ${totalCarrito}</h3>`,
      showConfirmButton: false,
      timer: 5500,
    });
  };

  const missingInputs = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      position: "center",
      icon: "warning",
      title: "Complete sus datos",
      text: "Complete todos los campos para finalizar la compra",

      showConfirmButton: true,
      timer: 5500,
    });
  };

  const mailError = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      position: "center",
      icon: "error",
      title: "Oops...",
      text: "Los campos de email no coinciden",
      color: "white",
      background: "red",
      showConfirmButton: true,
      timer: 5500,
    });
  };

  const createOrder = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const querySnap = collection(db, "orders");

    if (!formValue.name || !formValue.phone || !formValue.email) {
      missingInputs();
    } else if (formValue.email !== formValue.emailChk) {
      mailError();
    } else {
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
          orderSaved({ response });
          updateStock(db);
          clear();
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
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
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
              <input
                className="cartInput"
                type="email"
                placeholder="repita su mail"
                value={formValue.emailChk}
                onChange={datosUsuario}
                name="emailChk"
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
