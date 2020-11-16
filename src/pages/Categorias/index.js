import React, {useState, useEffect} from 'react';

import { Container, Categoria, CategoriaName, CategoriaDescription, CategoriaActions } from './styles';

import api from '../../services/api'

export default function Categorias() {
  const [categorias, setCategorias] = useState([])

  async function loadCategorias() {
    try {
      const response = await api.get('categorias')

      if (response.data.success) {
        setCategorias(response.data.categorias)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadCategorias()
  }, [categorias])

  return (
    <Container>
      <h2>Categorias</h2>
      {
        categorias.map(categoria => {
          return (
            <Categoria>
              <CategoriaName>{categoria.nome}</CategoriaName>
              <CategoriaDescription>{categoria.descricao}</CategoriaDescription>
            </Categoria>
          )
        })
      }
    </Container>
  )
}