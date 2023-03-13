import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [seleccion, setSeleccion] = useState({});
    

    const getProduct = () => {
        const db = getFirestore();
    const query = doc(db, 'productos', id)
    getDoc(query).then((res) => {
        setSeleccion({
            id: res.id, ...res.data()
        })
        // const vinos = response.docs.map((doc) => {
        //   return {
        //     id: doc.id, ...doc.data()
        //   }
        // })
        // const findProducto = vinos.find (vino => vino.id === id)
        // setSeleccion(findProducto)
      })
      .catch((error) => console.log (error))
    }

    useEffect (() => {
        getProduct()       
    }, [id])
  return (
    <div>
        <ItemDetail vino={seleccion} />
    </div>
  )
}

export default ItemDetailContainer