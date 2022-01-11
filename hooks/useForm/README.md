# useFormInputChange Hook

**Ejemnplo de uso :**

```javascript

  const initialForm = {
    name: "", 
    age: 0,
    email: "" 
  }

  const [ formValues, handleInputChange, reset ] = useFormInputChange({ initialForm }) 

```

> **NOTA** ```useFormInputChange() /* Recibe un objeto con propiedades con valores vacios por defecto y retorna un array [ formValues, handleInputChange, reset ]   */``` . 

