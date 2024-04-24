import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import { SideBar, NavBar } from "../components";
import { ProtectedRouts } from "../../ui/components/ProtectedRouts";
//import { useSelector } from "react-redux";



const drawerWidth = 240;

export const LayoutJournal = () => {
  //const {status} = useSelector(state => state.auth)

  return (
    <>
    <Box
       sx={{display: 'flex'}}
       className="animate__animated animate__fadeIn animate__faster"
       >
      <ProtectedRouts >
          <NavBar drawerWidth={drawerWidth} />
          <SideBar drawerWidth={drawerWidth} />
          <Box component="main"  sx={{flexGrow: 1, p:3}}>
            <Toolbar />
            <Outlet />

          </Box>
      </ProtectedRouts>
      

    </Box>
    </>
  )
}
