import React from 'react'
import './MainContainer.css'
const MainContainer = (props) => {
  return (
    <section className="Main-container">
      {props.children}
    </section>
  )
}

export { MainContainer }
