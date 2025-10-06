import { useFetch } from "../../hooks/useFetch"
import type { DeckBase } from "../../assets/Models/BDDFake"
import type { ReactNode } from "react"

interface Props{
    chidren : ReactNode,
    url : string
}


export const Loader = ({chidren, url}:Props): ReactNode =>{
    const {data, error, loading} = useFetch<DeckBase[]>(url)
      
      if(loading){
        return (
          <div>Loading....</div>
        )
      }
      if(error){
        return (<div>An error has occured: {error.message}</div>)
      }
      return[(
      <div>{chidren}</div>
      ), data ]
}