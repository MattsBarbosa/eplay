import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: ${colors.white};
  border-radius: 8px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  color: ${colors.white};
  cursor: pointer;
`
