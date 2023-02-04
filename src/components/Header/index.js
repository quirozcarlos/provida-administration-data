import React from 'react'
import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  LeftSide,
  Title
} from './styles'

import logo from '../../logo.svg';

export const Header = (props) => {
  const { goToPage } = props
  const style = {
    marginLeft: "40px"
  }

  return (
    <HeaderContainer>
      <InnerHeader>
        <LeftSide>
          <LeftHeader id='left-side'>
            <LogoHeader
              onClick={() => goToPage('home')}
            >
              <Title style={style}>ADMINISTRACIÓN PROVIDA</Title>
            </LogoHeader>
          </LeftHeader>
        </LeftSide>
      </InnerHeader>
    </HeaderContainer>
  )
}

export default Header
