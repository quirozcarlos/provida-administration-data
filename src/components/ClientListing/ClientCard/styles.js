import styled from 'styled-components'

export const CardContainer = styled.div`
  min-height:110px;
  background: #FFF;
  border: 1px solid #E9ECEF;
  padding: 10px;
  border-radius: 7.6px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  width: 100%;
  margin: 10px;

  @media (min-width: 576px) {
    margin: 10px;
    width: calc(100% - 20px);
  }

  @media (min-width: 681px) {
    width: calc(49% - 20px);
  }

  @media (min-width: 1440px) {
    width: calc(33% - 20px);
    margin: 10px 20px 10px 0px;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 86px;
  width: 100%;

  > * {
    margin: 3px;
  }
  p {
    color: #909BA9;
    text-align: left;
    font-size: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: pre-wrap;
  }

  span {
    color: ${props => props.theme.colors.darkTextColor};
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    p {
      font-size: 12px;
    }
    span {
      font-size: 14px;
    }
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: ${props => props.theme.colors.headingColor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      color: ${props => props.theme.colors.danger500};
      font-size: 16px;
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`
