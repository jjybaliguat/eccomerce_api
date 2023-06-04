import { Navbar, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useState } from 'react'

const NavList = () => {
  return (
    <h1>navlist</h1>
  )
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(searchTerm)
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)} className='w-3/5'>
      <div className='relative'>
        <input
          className='w-full p-3 pr-12 rounded-sm outline-none'
          type="text"
          name="search"
          placeholder='Search items'
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button
        className='absolute right-0 p-3 bg-blue-500'
        type='submit'
        >
        <svg className='w-6 text-white' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
        </button>
      </div>
    </form>
  )
}

const NavBar = () => {
  const [cartCount, setCartCount] = useState(0)
  return (
    <>
        <Navbar className="bg-blue-900 sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900 px-20 gap-5">
                <img src="/static/images/ShopPayLogo.png" className='h-16 w-40 cursor-pointer'/>
                <SearchBar />
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-3'>
                      <Link href='/sign-up' className='text-white hover:text-gray-400'>Sign-Up</Link>
                      <p className='text-gray-300'>|</p>
                      <Link href='/login' className='text-white hover:text-gray-400'>Login</Link>
                    </div>
                    <div class="relative py-2 cursor-pointer"
                      onClick={()=>alert("Going to Cart")}
                    >
                      {
                        cartCount &&
                          <div className="absolute top-1 left-3">
                            <p 
                            className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                              {cartCount}
                            </p>
                          </div>
                      }
                      <img src='/static/images/shopping-cart-icon.png' className='w-8 h-6'/>
                    </div>
                </div>
            </div>
        </Navbar>
    </>
  )
}

export default NavBar
