import React from 'react'

import { CardContainer, CardInfo, ContentWrapper, TitleWrapper } from './styles'

export const BillCard = (props) => {
  const { item } = props

  return (
    <CardContainer className='bill-card'>
      <div>
        <CardInfo>
          <TitleWrapper>
            {item?.tipo_factura_nombre}
          </TitleWrapper>
          <TitleWrapper>
            Bill N. {item?.id_factura}
          </TitleWrapper>
          <TitleWrapper>
            {item?.cliente_nombre} {item?.cliente_apellido}
          </TitleWrapper>
          <ContentWrapper>
            {item?.cedula_RIF}
          </ContentWrapper>
          <ContentWrapper>
            {item?.fecha_creacion}
          </ContentWrapper>
          <ContentWrapper>
            Total: {item?.total_dolares} $
          </ContentWrapper>
        </CardInfo>
      </div>
    </CardContainer>
  )
}
