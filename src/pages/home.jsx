import React from 'react'
import Hero from '../components/hero'
import Bestseller from '../components/bestseller'
import LatestCollection from './latestCollection'

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestseller />
    </div>
  )
}

export default Home
