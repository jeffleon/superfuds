import React,{useState} from 'react'
import {Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse, Input, InputGroup, NavbarText} from 'reactstrap'
import superfudslogo from '../assets/superfuds.jpeg'
import './styles/Menu.css'
import {Avatar} from '@material-ui/core'

const Menu = () =>{
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return(
        <div>
            <Navbar className="navbar" light expand="md">
            <NavbarBrand className="brand" href="/"><img width="40" height="40" src={superfudslogo}/></NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2"/>
                <Collapse isOpen={open} navbar>
                <Nav className="nav navbar-nav navbar-center" navbar>
                    <NavItem className="search">
                        <InputGroup>
                            <Input className="input" placeholder="&#xF002; Busca marcas y productos" bsSize="sm"></Input>
                        </InputGroup>
                    </NavItem>
                    <NavItem className="cart">
                        <NavLink href="/components/"><i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavbarText className="nameavatar">Saiby alimentos</NavbarText>
                    </NavItem>
                    <NavItem>
                        <Avatar className="avatar">S</Avatar>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Menu