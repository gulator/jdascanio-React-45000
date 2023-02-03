import CartWidget from "../CartWidget/CartWidget"
import './styleNav.css'

export default function NavBar () {

    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Comprar</li>
                <li>Sucursales</li>
                <li>Contacto</li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}