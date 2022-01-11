import { useEffect, useRef, useState } from "react"

/* const limit = 10
const cant_quotes = 1
const url_base = `https://www.breakingbadapi.com/api/` 
const full_url = url_base + `quotes/${cant_quotes}` */

export const useFetch = ( url ) => {

  const isMounted = useRef( true )

  const [ state, setState ] = useState({ data: null, loading: true, error: null })

  useEffect( () => {

    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect( () => {

    setState({ data: null, loading: true, error: null })

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        if ( isMounted.current ) {
          setState( {
            loading : false , 
            error   : null , 
            data   
          } )
          /* console.log("SE LLAMO!"); */
        } 

      } )
      .catch( () => {
        setState({ 
          data: null , 
          loading: false , 
          error: "No se pudo cargar la informacion de la API" 
        }) 
      })

  }, [ url ])


  return state 
}


/* 
Bajar el formato y llenar a mano solo los datos que estan mal
  * RFC 
  * Direccion erroneas 
  *
FIRMARLO 
ESCANEARLO Y ENVIARLO A: : servicio.clientes@burodecredito.com.mx 
Comunicarme dentro de 5 dias habiles para conocer si fue ACEPTADO o RECHAZADA mi solicitud!

enviar archivos adjuntos: 
  * INE de ambos lados 
  * Ultimo reporte de buro de credito.
  * RFC ( Bajarlo del SAT )

*/

