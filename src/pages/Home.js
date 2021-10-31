import React from 'react'
import { Header } from '@components/Header/Header'
import { ProductsList } from '@components/ProductsList/ProductsList'
import { MainContainer } from '@containers/MainContainer/MainContainer'

const Home = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <ProductsList />
      </MainContainer>
    </div>
  )
}

export { Home }
