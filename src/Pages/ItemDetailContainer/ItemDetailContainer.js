import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import vinos from "../../data/vinos";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [seleccion, setSeleccion] = useState({});
    console.log(id)
    const getProduct = new Promise((res, rej) =>{
        setTimeout (() => {
            const findProducto = vinos.find (vino => vino.id == id)
            res(findProducto)
        }, 200);
    })
    useEffect (() => {
        getProduct.then((response)=> {
            console.log(response)
            setSeleccion(response)
        })
        .catch ((error)=> {
            console.log(error)
        })
    }, [id])
  return (
    <div>
        <ItemDetail vino={seleccion} />
    </div>
  )
}

export default ItemDetailContainer