import React from 'react'
import { Box } from '@mui/material'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Button } from '@mui/material'
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next';


function AppBarElement() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {  
    i18n.changeLanguage(lang)
  }

  
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
            <Toolbar>
              <Button component={Link} to="/" color="inherit">{t("Home")}</Button>
              <Button component={Link} to="/about" color="inherit">{t("About")}</Button>
              <Button color="inherit" onClick={() => changeLanguage("en")}>EN</Button>
              <Button color="inherit" onClick={() => changeLanguage("fi")}>FI</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default AppBarElement