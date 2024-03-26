import { Link, useRouteError } from "react-router-dom"



export const ErrorPage = () => {
    const error = useRouteError();
 
   return (
    <>
        <h1>Oops!</h1>
        <h3>{
            error.statusText || error.message
            }</h3>
        <hr />
        <Link to="/">Go Home</Link>
    </>
  )
}

