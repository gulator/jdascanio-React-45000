import { Link } from "react-router-dom";
import Item from "../../components/Item/Item";
import "./itemListStyle.css";
import Counter from "../Counter/Counter";

const ItemList = ({ listaProductos }) => {
  return (
    <div className="itemCard">
      {listaProductos.map((productos) => (
        <div className="itemCardDetail" key={productos.id}>
          <Link to={`/item/${productos.id}`}>
            <Item item={productos} />
          </Link>
          <Counter />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
