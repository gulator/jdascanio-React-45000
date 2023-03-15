import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ILCStyle.css";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import NoLink from "../NoLink/NoLink";

export default function ItemListContainer() {
  let [listaProductos, setListaProductos] = useState([]);
  const [selected, setSelected] = useState("");
  const { IDcategoria } = useParams();

  const productosTodos = () => {
    const db = getFirestore();
    const queryBase = collection(db, "productos");

    const querySnap = IDcategoria
      ? query(queryBase, where("tipo", "==", IDcategoria))
      : queryBase;

    async function selectCategory() {
      let result = new Promise(function (res) {
        res(getDocs(querySnap));
      });
      let queryDocs = await result;
      if (queryDocs.docs.length !== 0) {
        const vinos = queryDocs.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setListaProductos(vinos);
      } else {
        setListaProductos("error");
      }
    }
    selectCategory();
  };

  useEffect(() => {
    productosTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IDcategoria]);

  useEffect(() => {
    listaProductos !== "error"
      ? setSelected(<ItemList listaProductos={listaProductos} />)
      : setSelected(<NoLink />);
  }, [listaProductos]);

  return <div className="contenedor">{selected}</div>;
}
