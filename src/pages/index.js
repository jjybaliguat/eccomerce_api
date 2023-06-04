import NavBar from '@/components/Navbar'
import { Button } from '@material-tailwind/react'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <>
      <Head>
        <title>ShopPay</title>
      </Head>
      <NavBar />
    </>
  )
}

export default Home
