import React from 'react';
import { useHistory } from 'react-router-dom'

import { Container, BrandName, LogouButton} from './styles';

import { logout } from '../../utils'

export default function Header() {

  const history = useHistory()

  function handleLogoutClick() {
    logout()
    history.push('/login')
  }

  return (
    <Container>
      <BrandName>Gastei</BrandName>
      <LogouButton onClick={handleLogoutClick}>Sair</LogouButton>
    </Container>
  )
}

