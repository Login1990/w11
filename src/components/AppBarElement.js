import React from 'react'
import { Box } from '@mui/material'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Button } from '@mui/material'
import {Link} from "react-router-dom"

function AppBarElement() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar>
            <Toolbar>
              <Button component={Link} to="/" color="inherit">Home</Button>
              <Button component={Link} to="/about" color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default AppBarElement