import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import { SideBar, NavBar } from "../components";



const drawerWidth = 240;

export const LayoutJournal = () => {
  return (
    <>
    <Box sx={{display: 'flex'}}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main"  sx={{flexGrow: 1, p:3}}>
        <Toolbar />
        <Outlet />

      </Box>

    </Box>
    </>
  )
}
