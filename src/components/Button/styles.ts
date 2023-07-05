import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  background-color: transparent;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  color: ${cores.branca};
`

export const ButtonLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  color: ${cores.branca};
`
