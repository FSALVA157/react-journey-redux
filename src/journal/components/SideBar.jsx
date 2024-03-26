import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"



export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}        
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {xs: 'none', sm: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},       
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">FS</Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText
                                     primary={text} />
                                    <ListItemText secondary="Nisi ullamco est velit consequat aliquip veniam labore dolor ipsum minim." />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
