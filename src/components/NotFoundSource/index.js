import React from 'react'

import { Button } from '../../components/Shared/Buttons'
import { NotFound, ButtonWrapper } from './styles'

export const NotFoundSource = (props) => {
  const {
    content,
    btnTitle,
    onClickButton
  } = props

  return (
    <NotFound id='not-found-source'>
      {content && <h1>{content}</h1>}
      {!onClickButton && props.children}
      {onClickButton && (
        <ButtonWrapper>
          <Button
            outline
            color='primary'
            onClick={() => onClickButton()}
          >
            {btnTitle}
          </Button>
        </ButtonWrapper>
      )}
    </NotFound>
  )
}
