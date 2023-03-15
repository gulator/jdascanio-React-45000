
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
    const queryBase = collection(db, 'productos')
    
    const querySnap = IDcategoria ? query ( 
      queryBase, where ('tipo', '==', IDcategoria)) : queryBase;
      
    getDocs(querySnap)
    .then((response) => {
      if (response.docs.length !== 0){
        const vinos = response.docs.map((doc) => {
          return {
            id: doc.id, ...doc.data()
          }        
        })
        setListaProductos(vinos)
      }
    })
    .catch((error) => console.log (error))
  }  
    
  useEffect(() => {
    productosTodos()  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IDcategoria]);

  return (
    <div className="contenedor">
      <ItemList listaProductos={listaProductos} />
    </div>
  );
}
