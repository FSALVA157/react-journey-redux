import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const ProtectedRouts = ({children}) => {
  const {status} = useSelector(state => state.auth) 
  if(status === 'authenticated'){
    return (
      <>{children}</>
    )
  }else{

    return <Navigate to="/auth" />
  }
}
