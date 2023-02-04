import styled, { css } from 'styled-components'

export const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 40px;

  #title {
    margin: 0px;
    text-align: left;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-shadow: 0px 3px 6px #2c2e33;
    opacity: 1;
  }

  .react-datepicker-wrapper {
    margin-top: 10px;
  }
`

export const WrapperSearch = styled.div`
  margin: 10px 20px 0px;
  display: flex;
  justify-content: flex-end;

  svg{
    align-self: center;
    cursor: pointer;
    font-size: 26px;
    color: ${props => props.theme?.colors?.primary};
    margin-left: 10px;
  }
  button {
    width: 250px;
    margin-left: 10px;
  }
`

export const BillListWrapper = styled.div`
  overflow: scroll hidden;
  width: 100%;
`

export const BillListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SearchWith = styled.div`
  width: 100%;
  border-bottom: 1px solid #E9ECEF;
  font-size: 14px;
  margin-bottom: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 425px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }
`

