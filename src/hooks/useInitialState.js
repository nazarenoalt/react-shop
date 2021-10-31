import { useState } from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const verifyIdDoesNotExist = (id) => {
    const idExist = state.cart.some(item => item.id === id)

    if(idExist) {
      console.log('true')
      return verifyIdDoesNotExist(id + 1);
    } else {
      console.log('false')
      return id;
    }
  }

  const addToCart = (payload) =>  {
    const newId = verifyIdDoesNotExist(payload.id)
    const payloadWithNewId = {
      ...payload,
      id: newId,
    }

    console.log(payloadWithNewId)
    setState({
      ...state,
      cart: [...state.cart, payloadWithNewId]
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
}

export { useInitialState }