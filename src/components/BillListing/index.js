import React, { useEffect, useState } from 'react'
import ReactDatePicker from 'react-datepicker'

import { BillContainer, BillList, BillListContainer, BillListWrapper, SearchWith, WrapperSearch } from './styles'
import { BackController } from '../BackController'
import { NotFoundSource } from '../NotFoundSource'
import { SearchBar } from '../SearchBar'
import { BillCard } from './BillCard'
import { Button } from '../Shared/Buttons'

import 'react-datepicker/dist/react-datepicker.css';
import { Tab, Tabs } from '../Shared/Tabs'

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
  const [currentTab, setCurrentTab] = useState('date')

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
        <div style={{ marginBottom: 40 }}>
          <div>
            <h1 id='title'>Buscar Facturas</h1>
          </div>
          <div style={{ marginTop: 30, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <SearchWith>
              <Tabs variant='primary'>
                <Tab
                  onClick={() => setCurrentTab('date')}
                  active={currentTab === 'date'}
                  borderBottom={currentTab === 'date'}
                >
                  Buscar por fecha
                </Tab>
                <Tab
                  onClick={() => setCurrentTab('id')}
                  active={currentTab === 'id'}
                  borderBottom={currentTab === 'id'}
                >
                  Buscar por id
                </Tab>
                <Tab
                  onClick={() => setCurrentTab('client')}
                  active={currentTab === 'client'}
                  borderBottom={currentTab === 'client'}
                >
                  Buscar por cliente
                </Tab>
              </Tabs>
            </SearchWith>
            {currentTab === 'date' && (
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', marginTop: 20, alignItems: 'flex-end' }}>
                  <div className='me-4'>
                    <span>Fecha Inicio</span>
                    <ReactDatePicker
                      className='form-control datepicker'
                      selected={startDate}
                      format="dd-mm-yyyy"
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className='me-4'>
                    <span>Fecha Fin</span>
                    <ReactDatePicker
                      className='form-control datepicker'
                      selected={endDate}
                      minDate={startDate}
                      format="dd-mm-yyyy"
                      value={new Date()}
                      maxDate={new Date()}
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>
                  <div>
                    <Button
                      className='mt-4 btn btn-primary btn-sm'
                      color='primary'
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
              </div>
            )}
            {currentTab === 'id' && (
              <div style={{ width: '100%' }}>
                <SearchBar
                  lazyLoad
                  containerStyle={{ marginTop: 20, width: '40%' }}
                  search={searchValue?.type === 'billid' && searchValue?.value}
                  placeholder={'Buscar por Id Factura'}
                  onSearch={(value) => setSearchValue({
                    ...searchValue,
                    type: 'billid',
                    value
                  })}
                />
              </div>
            )}
            {currentTab === 'client' && (
              <div style={{ width: '100%' }}>
                <SearchBar
                  lazyLoad
                  containerStyle={{ marginTop: 20, width: '40%' }}
                  search={searchValue?.type === 'billclient' && searchValue?.value}
                  placeholder={'Buscar por id Cliente'}
                  onSearch={(value) => setSearchValue({
                    ...searchValue,
                    type: 'billclient',
                    value
                  })}
                />
              </div>
            )}
          </div>
        </div>
        {billState.loading && (
          <NotFoundSource content={'Cargando facturas'} />
        )}
        {!errorDates && !billState.loading && !billState.result?.length && (
          <NotFoundSource content={'No hay resultados para mostrar'} />
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
