import styled from 'styled-components'

export const Container = styled.div`
  bottom: 0;
  left: 0;
  padding: 1rem;
  padding-top: 5rem;
  position: fixed;
  top: 0;

  width: 220px;
  
  background-color: #f0f0fd;
  border-right: 1px solid #bbb4;
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 1rem;
    font-weight: bold;
    color: #a7a7a7;

    :hover {
      opacity: .7;
    }
  }

  .selected {
    color: #333;
  }
`