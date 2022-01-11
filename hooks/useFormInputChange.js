import { useState } from 'react' 

export const useFormInputChange = ( initialState = {} ) => {
  const [ values, setValues ] = useState(initialState) 

  const reset = () => {
    setValues( initialState )
  }

  const handleInputChange = ({ target }) => {
    /* console.log(target.name); */
    setValues({
      ...values , 
      [ target.name ]: target.value
    })
  }

  return [
    values , 
    handleInputChange,
    reset 
  ]


}