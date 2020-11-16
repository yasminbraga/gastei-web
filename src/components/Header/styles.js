import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 1.25rem;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 15;
  background-color: #fff;
`;

export const BrandName = styled.h2`
  color: #333;
`;

export const LogouButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: initial;
  width: auto;
`;