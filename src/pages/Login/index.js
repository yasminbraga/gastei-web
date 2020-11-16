import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api'

import { login } from '../../utils'

export default function Login({ history }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  async function handleClick(ev) {
    ev.preventDefault();
    
    try {
      const response = await api.post('sessions', { email, password })
      const { data } = response

      if (data.success) {
        login(data.token)
        history.push('/')
      } else {
        console.log(data.message)
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container>
      <form>
        <h1>Login</h1>
        <input 
          onChange={(ev) => setEmail(ev.target.value)} 
          value={email}
          placeholder="Email" 
          type="email" 
          name="email"
        />
        <input 
          onChange={(ev) => setPassword(ev.target.value)} 
          value={password}
          placeholder="Senha" 
          type="password" 
          name="password"
        />

        <button onClick={handleClick}>Entrar</button>
      </form>
    </Container>
  )
}