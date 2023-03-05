import "./ItemDetail.css";
import Counter from "../Counter/Counter";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ vino }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  // const addToCart = (e) => {
  //   e.preventDefault();
  //   if (counter !== 0) {
  //     console.log({ ...vino, cantidad: counter });
  //   } else {
  //     alert("La cantidad debe ser mayor a cero");
  //   }
  // };

  return (
    <div className="contenedorItem">
      <div className="containerImgVino">
        <img className="imgVino" src={vino.image} alt="" />
      </div>
      <div className="containerDetalles">
        <h2>{vino.nombre}</h2>
        <h5>Bodega:{vino.bodega}</h5>
        <h5>Origen: {vino.origen}</h5>
        <h5>Origen: {vino.varietal}</h5>
        <h2>Precio: ${vino.precio}</h2>
        <p>Agregar al carrito: </p>
        <Counter counter={counter} setCounter={setCounter} />
        <div className="contBotonesDetalle">
          <button className="botonesDetalle" onClick={() => navigate("/")}>
            Continuar comprando
          </button>
          <button
            className="botonesDetalle"
            onClick={() => addItem(vino, counter)}
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
    </div>
  );
};

export default ItemDetail;
