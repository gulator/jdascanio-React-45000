import "./itemStyle.css";

const Item = ({ item }) => {
  return (
    
    <div className="cardVino">
      <img className="vinoImagen" src={item.image} alt="Imagen del Vino" />
      <h6>{item.nombre}</h6>
      <h4>Precio: ${item.precio}</h4>
      <p>{item.varietal}</p>
    </div>
      
    
  );
};

export default Item;
