import React from 'react'

import { CardContainer, CardInfo, ContentWrapper, TitleWrapper } from './styles'

export const ClientCard = (props) => {
  const { item } = props

  return (
    <CardContainer className='bill-card'>
      <div>
        <CardInfo>
          <TitleWrapper>
            {item?.clienteNombre} {item?.clienteApellido}
          </TitleWrapper>
          <ContentWrapper>
            {item?.cedula_RIF}
          </ContentWrapper>
          {item?.correo?.toLowerCase() !== 'no' && (
            <ContentWrapper>
              {item?.correo}
            </ContentWrapper>
          )}
          <ContentWrapper>
            Phone number: {item?.telefono}
          </ContentWrapper>
        </CardInfo>
      </div>
    </CardContainer>
  )
}
