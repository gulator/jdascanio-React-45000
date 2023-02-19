import vinos from "../../data/vinos";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ILCStyle.css";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  let [listaProductos, setListaProductos] = useState([]);
  const { IDcategoria } = useParams();
  const productosTodos = new Promise((res, rej) => {
    if (IDcategoria) {
      const filtroCategoria = vinos.filter((item) => item.tipo === IDcategoria);
      setTimeout(() => {
        res(filtroCategoria);
      }, 200);
    } else {
      setTimeout(() => {
        res(vinos);
      }, 200);
    }
  });
  useEffect(() => {
    productosTodos
      .then((response) => {
        setListaProductos(response);
      })
      .catch((error) => console.log(error));
  }, [IDcategoria]);

  return (
    <div className="contenedor">
      <ItemList listaProductos={listaProductos} />
    </div>
  );
}
