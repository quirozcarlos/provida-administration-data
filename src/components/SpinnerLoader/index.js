import React from 'react'
import { Container, Content, Spinner } from './styles'

export const SpinnerLoader = (props) => {
  const {
    content,
    style,
    iconStyle
  } = props
  return (
    <Container style={style}>
      {content && (<Content>{content}</Content>)}
      <Spinner className='spinner' style={iconStyle} {...props}>
        <div className='spinner-content'>
          <div />
        </div>
      </Spinner>
    </Container>
  )
}
