import React from 'react'
import { useTheme } from 'styled-components'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  HeroContent,
  WrapButtons,
} from './styles'

import { Button } from '../Shared/Buttons'

export const HomeHero = (props) => {
  const { goToPage } = props
  const theme = useTheme()
  return (
    <HeroContainer bgimage={theme.images.home}>
      <ContentWrapper>
        <HeroContent>
          <Title>PROVIDA - ADMINISTRACIÓN DE DATOS</Title>
          <WrapButtons>
            <Button
              color='primary'
              onClick={() => goToPage('clients')}
            >
              Lista de clientes
            </Button>
            <Button
              color='primary'
              onClick={() => goToPage('bills')}
            >
              Buscar facturas
            </Button>
          </WrapButtons>
        </HeroContent>
      </ContentWrapper>
    </HeroContainer>
  )
}
