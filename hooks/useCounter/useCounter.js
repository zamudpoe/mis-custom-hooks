/* 
  Custom Hook que permite: 
    incrementar, 
    decrementar 
    resetear 
  el estado del componente.  
*/ 

import { useState } from 'react'

export const useCounter = (  initialState = 10 ) => {
  const [state, setState] = useState( initialState )

  const increment = ( factor = 1 ) => { setState( state + factor ) }
  const decrement = ( factor = 1 ) => { setState( state - factor ) }
  const reset     = () => { setState( 10 ) }
 
  return {
    state ,
    increment ,
    decrement , 
    reset
  }

}

