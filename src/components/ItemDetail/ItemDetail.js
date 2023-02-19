import "./ItemDetail.css";
import Counter from "../Counter/Counter";

const ItemDetail = ({ vino }) => {
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
      <Counter />
      </div>
    </div>
  );
};

export default ItemDetail;
