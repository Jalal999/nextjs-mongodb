// import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import Card from '@mui/material/Card';
import { Nav, MenuLinks, Logo, MenuLink } from "./NavStyle"

const NavBar = () => {
    return (
        <Card>
            <Nav>
                <Logo>
                    WebDev
                </Logo>
                <MenuLinks>
                    <MenuLink>
                        <Link href='/'>Home</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link href='/about'>About</Link>
                    </MenuLink>
                </MenuLinks>
            </Nav>
        </Card>
    )
}

export default NavBar
