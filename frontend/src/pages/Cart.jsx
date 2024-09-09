import React, { useContext, useEffect, useState } from 'react'

import CartItem from '../components/cartItem'
import { CartContext } from '../context/CartContext'

// const url = "http://localhost:9000/api/pizzas"

const Cart = () => {
    const {cart, total, setTotal, buyPizza, setBuyPizza} = useContext(CartContext)
  

    // const getDatos = async () => {
    //     const response = await fetch(cart)
    //     const pizzas = await response.json()
    //     const pizzasInCart = pizzas.map(obj => ({...obj, quantity: 1, total: obj.price}))
    //     setBuyPizza(pizzasInCart)
    // }
    
    // useEffect(() => {
    //     getDatos()
    // }, [])


    // const [total, setTotal] = useState(0)


    const totalPizzas = {}
    const addTotalPizza = (id, total) => {
        totalPizzas[id] = total
        const totalValues = Object.values(totalPizzas)
        let tempTotal = totalValues.reduce(
            (acc, amount)=> acc + amount, 0
        ) 
        setTotal(tempTotal)
    }

  return (
    <>
    <h3 className='mt-3'>Carro de Compras</h3>
    <div>
        {buyPizza.map(purchased => (
            <CartItem 
                key={purchased.id}
                purchased={purchased}
                addTotalPizza={addTotalPizza}
            />
        ))}
        <div className='total-carrito mt-5'>
            <h4>Total: ${numberWithCommas(total)} </h4>
            <button className='btn btn-info'>Pagar</button>
        </div>
       
    </div>
    </>
  )
}

function numberWithCommas(x) {
    if (x == null)
        return ""
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Cart