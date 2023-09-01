
import { useContext, useState } from "react"
import { CartContext } from '../Context/ShoppingCartContext';
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { app } from "../App";

const Checkout = () => {

    const [orderId, setOrderId] = useState("")

    const { cart, resetCart } = useContext(CartContext)

    // PAara cada campo
    const [nombre, setNombre] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [telefono, setTelefono] = useState("")
    const [correo, setCorreo] = useState("")

    const createOrder = async (e) => {

        const db = getFirestore(app)

        e.preventDefault()

        try {
            const buyer = {
                nombre, domicilio, telefono, correo
            }

            const items = cart.map((product) => ({
                id: product.id,
                nombre: product.nombre,
                price: product.price,
                cantidad: product.cantidad
            }))

            const order = {
                buyer,
                items,
                total: cart.reduce((acc, item) => (item.cantidad * item.price) + acc, 0),
                date: new Date().toString()

            }

            console.log(order)

            const setOrder = await addDoc(collection(db, "ordenes"), order)

            setOrderId(setOrder.id)

            resetCart()

        } catch (error) {
            console.error(`Error al comprar ${error}`)
        }
    }

    return (
        <form onSubmit={createOrder}>
            <div className="inputGroup">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name='nombre' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label htmlFor="domicilio">Domicilio</label>
                <input type="text" name='domicilio' placeholder='Domicilio' onChange={(e) => setDomicilio(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label htmlFor="Telefono">Telefono</label>
                <input type="text" name='Telefono' placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label htmlFor="Correo">Correo</label>
                <input type="text" name='Correo' placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} />
            </div>

            <button type="submit">Finalizar compra</button>
            <p>{
                orderId && ( "El id de tu orden es:" + orderId )
            }</p>

        </form>
    )
}

export default Checkout