import React from 'react'
import {
  Header as HeaderContainer,
  InnerHeader,
  LogoHeader,
  LeftHeader,
  LeftSide
} from './styles'

import logo from '../../logo.svg';

export const Header = (props) => {
  const { goToPage } = props

  return (
    <HeaderContainer>
      <InnerHeader>
        <LeftSide>
          <LeftHeader id='left-side'>
            <LogoHeader
              onClick={() => goToPage('home')}
            >
              <img src={logo} className="App-logo" alt="logo" />
            </LogoHeader>
          </LeftHeader>
        </LeftSide>
      </InnerHeader>
    </HeaderContainer>
  )
}

export default Header
