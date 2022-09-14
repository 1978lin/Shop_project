import React from 'react'
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from 'container/components/Menu/Menu'
import CartHeader from 'container/components/CartHeader/CartHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Fake Shop
                    </Typography>
                    <Menu />
                    <CartHeader />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
