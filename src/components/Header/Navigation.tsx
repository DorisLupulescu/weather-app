import { ListItem } from '@mui/material'
import { useMemo } from 'react'
import { MENU_ITEMS } from '../../utils/constants'
import NavigationButton from './NavigationButton'
import { List, NavLink } from './styles'

const Navigation = () => {
    const createMenuItems = useMemo(
        () =>
            MENU_ITEMS.map((item, index) => (
                <ListItem key={`menu-item-${item}-${index}`}>
                    <NavLink bgColor={item.color} to={`${item.pageUrl}`}>
                        <NavigationButton color={item.color}>
                            {item.title}
                        </NavigationButton>
                    </NavLink>
                </ListItem>
            )),
        []
    )
    return <List>{createMenuItems}</List>
}

export default Navigation
