import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ vino }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

  const showToastMessage = () => {
    toast.success(`Se agregó ${vino.nombre} x ${counter}u.`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
  };
  const funciones = () => {
    addItem(vino, counter);
    showToastMessage();
  };

  if (vino.id) {
    return (
      <div className="contenedorItem">
        <div className="containerImgVino">
          <img className="imgVino" src={vino.image} alt="" />
        </div>
        <div className="containerDetalles">
          <h2>{vino.nombre}</h2>
          <h5>Bodega: {vino.bodega}</h5>
          <h5>Origen: {vino.origen}</h5>
          <h5>Origen: {vino.varietal}</h5>
          <h2>Precio: ${vino.precio}</h2>
          {vino.stock !== 0 && (
            <>
              <p>Agregar al carrito: </p>
              <Counter counter={counter} setCounter={setCounter} />
            </>
          )}
          {vino.stock === 0 && <h3>Producto sin stock</h3>}
          <div className="contBotonesDetalle">
            <button className="botonesDetalle" onClick={() => navigate("/")}>
              Continuar comprando
            </button>
            <button
              disabled={counter > vino.stock}
              className="botonesDetalle"
              onClick={() => funciones()}
            >
              Agregar al carrrito
            </button>
            <button
              className="botonesDetalle"
              onClick={() => navigate("/carrito")}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default ItemDetail;
