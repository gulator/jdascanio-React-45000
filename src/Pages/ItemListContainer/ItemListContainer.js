
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ILCStyle.css";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

export default function ItemListContainer() {
  let [listaProductos, setListaProductos] = useState([]);
  const { IDcategoria } = useParams();

  const productosTodos = () => {
    const db = getFirestore();
    const querySnap = collection(db, 'productos')
    
    if (IDcategoria) {
      const filtroCategoria = query (querySnap, where ('tipo', '==', IDcategoria))
      getDocs(filtroCategoria)
    .then((response) => {
      const vinos = response.docs.map((doc) => {
        return {
          id: doc.id, ...doc.data()
        }
        
      })
      setListaProductos(vinos)
 
    })
    .catch((error) => console.log (error))
  }else{
    getDocs(querySnap)
    .then((response) => {
      const vinos = response.docs.map((doc) => {
        return {
          id: doc.id, ...doc.data()
        }
      })
      setListaProductos(vinos)
     
    })
    .catch((error) => console.log (error))
  }
  }
    
  useEffect(() => {
    productosTodos()  
  }, [IDcategoria]);

  return (
    <div className="contenedor">
      <ItemList listaProductos={listaProductos} />
    </div>
  );
}
