import React from 'react'
import { useSelector } from 'react-redux'

const Subtotal = () => {

  const subtotal = useSelector(state=>state.cart.totalAmount)

  return (
    <div>{subtotal}</div>
  )
}

export default Subtotal