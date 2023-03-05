import { CartContext } from "./CartContext"
import { useState } from "react"

const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([])

    const addItem = (item, cantidad) => {
    if (isInCart (item.id)) {
        const newCart = cart.map ((producto) => {
            if (producto.id === item.id){
                producto.cantidad = producto.cantidad + cantidad
                return producto
            }else{
                return producto
            }
        })
        setCart (newCart)
    }else {
    
            const producto = {
                id : item.id,
                nombre : item.nombre,
                varietal : item.varietal,
                precio : item.precio,
                image : item.image,
                cantidad: cantidad,
             }       
             setCart([...cart, producto])
        }
    }
    
        const clear = () => {
            setCart([])
        }


    const removerItem = (idProducto) => {
        setCart(cart.filter((producto) => producto.id !== idProducto))
       
    }
    const isInCart = (idProducto) => {
        if (cart.find ((producto) => producto.id === idProducto)){
            return true
        } else {
            return false
        }

    }

  return (
    <CartContext.Provider value={{cart, addItem, clear, removerItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider