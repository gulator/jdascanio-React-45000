import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import NoLink from "../NoLink/NoLink";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [seleccion, setSeleccion] = useState({});
  const [selected, setSelected] = useState("");

  const getProduct = () => {
    const db = getFirestore();
    const query = doc(db, "productos", id);
    async function prodSelection() {
      let result = new Promise(function (res) {
        res(getDoc(query));
      });
      let queryDoc = await result;
      if (queryDoc.exists()) {
        setSeleccion({
          id: queryDoc.id,
          ...queryDoc.data(),
        });
      } else {
        setSeleccion("error");
      }
    }
    prodSelection();
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    seleccion !== "error"
      ? setSelected(<ItemDetail vino={seleccion} />)
      : setSelected(<NoLink />);
  }, [seleccion]);

  return <div>{selected}</div>;
};

export default ItemDetailContainer;
