import { Link } from "react-router-dom";
import Item from "../../components/Item/Item";
import "./itemListStyle.css";
import NoLink from "../../Pages/NoLink/NoLink";

const ItemList = ({ listaProductos }) => {
  console.log (listaProductos.length)
  if (listaProductos.length > 0) {
    return (
      <div className="itemCard">
        {listaProductos.map((productos) => (
          <div className="itemCardDetail" key={productos.id}>
            <Link to={`/item/${productos.id}`}>
              <Item item={productos} />
            </Link>
          </div>
        ))}
      </div>
    );
  }else{
    return(
        <NoLink />
    )
  }

};

export default ItemList;
