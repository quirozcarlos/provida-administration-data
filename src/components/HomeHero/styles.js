import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: fit-content;
  height: calc(100vh - 85px);
  position:relative;
  ${({ mb }) => mb && css`
    margin-bottom: ${mb};
  `}

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 567px) {
    margin-bottom: 0;
  }
`

export const HeroContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 0px 10vw 0px;
  background-color: #0000004D;

  input {
    width: 90%;
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    justify-content: center;
    padding: 0px 40px 0px;
    input {
      width: 97%;
    }
  }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #2c2e33;
  opacity: 1;

  @media (min-width: 381px) {
    font-size: 35px;
  }


  @media (min-width: 576px) {
    font-size: 40px;
    line-height: initial;
  }

  @media (min-width: 850px) {
    font-size: 45px;
  }
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: .96rem;
  line-height: 24px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  text-shadow: 0px 3px 6px #2c2e33;
  margin-bottom: 30px;

  @media (min-width: 480px) {
    font-size: 24px;
    line-height: initial;
    margin-bottom: 37px;
  }
`

export const HeroContent = styled.div`
  button{
    font-size: 12px;
    line-height: 18px;
    padding: 10px 16px;
    margin-bottom: 45px;
    white-space: nowrap;

    @media (min-width: 576px) {
      padding-top: 5px;
      padding-bottom: 5px;
      font-size: 18px;
      width: 180px;
      line-height: initial;
    }
  }
`

export const WrapButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;

  button {
    padding: 10px 0;
    cursor: pointer;

    &:nth-child(1) {
      margin-right: 20px;
    }
  }
`
