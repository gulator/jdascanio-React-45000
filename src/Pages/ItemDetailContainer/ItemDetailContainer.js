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
    getDoc(query)
      .then((res) => {
        if (res.exists()) {
          setSeleccion({
            id: res.id,
            ...res.data(),
          });
        }else {
          setSeleccion('error')
        }
      })
      .then(() => {
        console.log(seleccion);
      })
      //   console.log(seleccion)
      //   setSelected(<ItemDetail vino={seleccion} />);
      //   console.log(selected)
      // } else {
      //   setSelected(<NoLink />);
      // }
      // const vinos = response.docs.map((doc) => {
      //   return {
      //     id: doc.id, ...doc.data()
      //   }
      // })
      // const findProducto = vinos.find (vino => vino.id === id)
      // setSeleccion(findProducto)

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    seleccion !== 'error' ? setSelected(<ItemDetail vino={seleccion} />) : setSelected(<NoLink />);
  }, [seleccion])

  return <div>{selected}</div>;
};

export default ItemDetailContainer;
