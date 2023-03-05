import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'
import carritoVacio from '../../img/empty-cart.jpg'
import remover from '../../img/remove.svg'

const Cart = () => {
  const {cart, clear, removerItem} = useContext(CartContext)
  return (
    <div>
      {
      cart.map((producto) => (
        <div key={producto.id} className="listadoCarrito">
          <h3>{producto.nombre}</h3>
          <h4>{producto.cantidad}</h4>
          <img onClick={()=> removerItem (producto.id)} src={remover} alt=""/>
        </div>
      ))
      }
      {
        cart.length > 0 && <button onClick={clear}>vaciar carrito</button>
      }
      {
        cart.length === 0 && <div className="carroVacio">
          Carrito vacio
          <img src={carritoVacio} alt=""/>
        </div>
      }
      
    </div>
  )
}

export default Cart