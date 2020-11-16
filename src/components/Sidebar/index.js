import React from 'react';
import { NavLink } from 'react-router-dom'

import { Container, Navigation } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <Navigation>
        <NavLink activeClassName="selected" to="/" exact>
          Dashboard
        </NavLink>
        <NavLink activeClassName="selected" to="/entradas">Entradas</NavLink>
        <NavLink activeClassName="selected" to="/saidas">Saídas</NavLink>
        <NavLink activeClassName="selected" to="/categorias">Categorias</NavLink>
      </Navigation>
    </ Container >
    )
}
