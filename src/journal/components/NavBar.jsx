import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({drawerWidth=240}) => {
  return (
    <AppBar 
        position="fixed"
        sx={{ 
            mb: 2,
             backgroundColor: 'primary.main',
             width: {sm: `calc(100% - ${drawerWidth}px)` },
             ml: { sm: `${drawerWidth}px` },
             }} 

        >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"              
            >
              <Typography variant="h6" noWrap component="div">Journal App</Typography>
              <IconButton color="error">
                <LogoutOutlined />
              </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  )
}
