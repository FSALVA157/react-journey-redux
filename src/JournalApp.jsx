import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import { CheckingAuth } from "./ui/components/CheckingAuth.jsx";
import { useCheckAuth } from "./hooks/useCheckAuth.js";


export const JournalApp = () => {

  const {status} = useCheckAuth();
  


  return (
    <>
    {
    status === "checking"? <CheckingAuth />
    : <RouterProvider router={router} />
  }
    
    </>
  )
}
