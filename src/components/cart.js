import React from 'react'
import useStore from '../context/StoreContext'
import ProductRow from './productRow'
import { HiOutlineXMark } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const Cart = ({ toggleCart }) => {
  const { cart, checkout } = useStore()
  const formattedNum = (num) =>
    Number(num)
      .toFixed(2)
      .replace(/[.,]00$/, '')

  return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='cart-container'
      >
        <button onClick={toggleCart} className='close-cart'>
          <HiOutlineXMark></HiOutlineXMark>
        </button>
        <article className='cart-products-container'>
          {cart.length > 0 ? (
            cart.map((item, index) => <ProductRow key={index} item={item} />)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </article>
        <article className='cart-summary'>
          <div className='checkout-info'>
            <div>TOTAL</div>
            <div>
              $
              {checkout.totalPrice
                ? formattedNum(checkout.totalPrice?.amount)
                : 0}
            </div>
          </div>
          <button
            disabled={cart.length === 0}
            onClick={() => window.open(checkout.webUrl)}
            className='checkout-btn'
          >
            PURCHASE
          </button>
        </article>
      </motion.section>
  )
}

export default Cart
