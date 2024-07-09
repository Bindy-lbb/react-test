
import { useEffect,useState } from "react";

export function useMessageSession(key,defaultValue) {

  const [message,setMessage] = useState(defaultValue)

  useEffect(()=>{
    console.log('执行了么')
     window.sessionStorage.setItem(key,message)
  },[message,key])

  return [message,setMessage]

}

