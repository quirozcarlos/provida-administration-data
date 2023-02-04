import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'

import { BillContainer, BillList, BillListContainer, BillListWrapper, WrapperSearch } from './styles'
import { BackController } from '../BackController'
import { NotFoundSource } from '../NotFoundSource'
import { SearchBar } from '../SearchBar'
import { BillCard } from './BillCard'
import { Button } from '../Shared/Buttons'

import 'react-datepicker/dist/react-datepicker.css';

const BillListingUI = (props) => {
  const {
    billState,
    searchValue,
    setSearchValue,
    goToPage,
    handleChangeSearch,
  } = props

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [errorDates, setErrorDates] = useState(null)

  const onClickSearch = () => {
    if (endDate < startDate) {
      setErrorDates(`Select a date after ${startDate.toLocaleDateString()}`)
      return
    }
    setSearchValue({
      ...searchValue,
      type: 'billdate',
      value: {
        from: `${startDate.getDate()}-${startDate.getMonth() + 1}-${startDate.getFullYear()}`,
        to: `${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`,
      }
    })
  }

  useEffect(() => {
    setErrorDates(null)
  }, [endDate])

  return (
    <BillContainer>
      <BillList>
        <div style={{ }}>
          <div>
            <h1 id='title'>Buscar Factura</h1>
          </div>
          <div style={{ marginTop: 30, display: 'flex', alignItems: 'center' }}>
            <div className='me-4'>
              <span>Fecha Inicio</span>
              <ReactDatePicker className='form-control datepicker '
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className='me-4'>
              <span>Fecha Fin</span>
              <ReactDatePicker className='form-control datepicker'
                selected={endDate}
                minDate={startDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <div>
              <Button
                className='mt-4 btn btn-primary btn-sm'
                onClick={() => onClickSearch()}
              >
                Buscar
              </Button>
            </div>
          </div>
          <div>
            <p style={{ color: 'red' }}>
              {errorDates}
            </p>
          </div>
          <SearchBar
            lazyLoad
            search={searchValue?.type === 'billid' && searchValue?.value}
            placeholder={'Buscar por Id Factura'}
            onSearch={(value) => setSearchValue({
              ...searchValue,
              type: 'billid',
              value
            })}
          />
          <SearchBar
            lazyLoad
            containerStyle={{ marginTop: 20 }}
            search={searchValue?.type === 'billclient' && searchValue?.value}
            placeholder={'Buscar por id Cliente'}
            onSearch={(value) => setSearchValue({
              ...searchValue,
              type: 'billclient',
              value
            })}
          />
        </div>
        {billState.loading && (
          <NotFoundSource content={'Loading Bills'} />
        )}
        {!errorDates && !billState.loading && !billState.result?.length && (
          <NotFoundSource content={'Sin resultados'} />
        )}
        {!billState.loading && !!billState.result?.length && (
          <BillListWrapper>
            <BillListContainer>
              {billState.result?.map((item, idx) => (
                <BillCard key={idx} item={item}/>
              ))}
            </BillListContainer>
          </BillListWrapper>
        )}
      </BillList>
    </BillContainer>
  )
}

export const BillListing = (props) => {
  const listProps = {
    ...props,
    UIComponent: BillListingUI
  }
  return (
    <BackController {...listProps} />
  )
}
