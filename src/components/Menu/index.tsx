import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { MenuImage, StyledMenu, MenuButton } from './styled'
import Items from './Items'

const Menu: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <>
            <IconButton aria-label="Abrir menu" onClick={toggleMenu}>
                <MenuImage alt="" />
            </IconButton>
            <StyledMenu open={isOpen} onOpen={toggleMenu} onClose={toggleMenu}>
                <MenuButton
                    aria-label="Fechar menu"
                    startIcon={<CloseRoundedIcon />}
                    onClick={toggleMenu}
                >
                    Fechar
                </MenuButton>
                <Items />
            </StyledMenu>
        </>
    )
}

export default Menu
