import React from 'react'
import { PageNotFoundContainer, PageNotFoundText } from './styles'

import { useWindowSize } from '../../hooks/useWindowSize'

export const PageNotFound = (props) => {
  const { width } = useWindowSize()
  return (
    <PageNotFoundContainer width={width}>
      <PageNotFoundText>
        <h1>PAGE NOT FOUND</h1>
      </PageNotFoundText>
    </PageNotFoundContainer>
  )
}
