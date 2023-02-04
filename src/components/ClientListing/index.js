import React, { useEffect, useState } from 'react'

import { ClientContainer, ClientList, ClientListContainer, ClientListWrapper } from './styles'
import { BackController } from '../BackController'
import { NotFoundSource } from '../NotFoundSource'
import { SearchBar } from '../SearchBar'
import { ClientCard } from './ClientCard'
import { Button } from '../Shared/Buttons'

import 'react-datepicker/dist/react-datepicker.css';
import { Tab, Tabs } from '../Shared/Tabs'
import { SearchWith } from '../BillListing/styles'

const ClientListingUI = (props) => {
  const {
    clientState,
    searchValue,
    setSearchValue,
    currentTabClients,
    setCurrentTabClients
  } = props

  const handleChangeTab = (tab) => {
    setCurrentTabClients(tab)
    setSearchValue({ type: null, value: null })
  }

  return (
    <ClientContainer>
      <ClientList>
        <div style={{ }}>
          <div>
            <h1 id='title'>Listado de clientes</h1>
          </div>
        </div>
        {!clientState.loading && (
          <div style={{ marginTop: 30 }}>
            <SearchWith>
              <Tabs variant='primary'>
                <Tab
                  onClick={() => handleChangeTab('id')}
                  active={currentTabClients === 'id' || !currentTabClients}
                  borderBottom={currentTabClients === 'id' || !currentTabClients}
                >
                  Buscar por cedula
                </Tab>
                <Tab
                  onClick={() => handleChangeTab('name')}
                  active={currentTabClients === 'name'}
                  borderBottom={currentTabClients === 'name'}
                >
                  Buscar por nombre
                </Tab>
                <Tab
                  onClick={() => handleChangeTab('mail')}
                  active={currentTabClients === 'mail'}
                  borderBottom={currentTabClients === 'mail'}
                >
                  Buscar por correo
                </Tab>
                <Tab
                  onClick={() => handleChangeTab('phone')}
                  active={currentTabClients === 'phone'}
                  borderBottom={currentTabClients === 'phone'}
                >
                  Buscar por numero telefonico
                </Tab>
              </Tabs>
            </SearchWith>
            {(currentTabClients === 'id' || !currentTabClients) && (
              <div style={{ width: '100%' }}>
                <SearchBar
                  lazyLoad
                  containerStyle={{ marginTop: 20, marginBottom: 20, width: '40%' }}
                  search={searchValue?.value}
                  placeholder={'Buscar por cedula'}
                  onSearch={(value) => {
                    setCurrentTabClients('id')
                    setSearchValue({ ...searchValue, value })
                  }}
                />
              </div>
            )}
            {currentTabClients === 'name' && (
              <div style={{ width: '100%' }}>
                <SearchBar
                  lazyLoad
                  containerStyle={{ marginTop: 20, marginBottom: 20, width: '40%' }}
                  search={searchValue?.value}
                  placeholder={'Buscar por nombre'}
                  onSearch={(value) => {
                    setSearchValue({ ...searchValue, value })
                  }}
                />
              </div>
            )}
            {currentTabClients === 'mail' && (
              <div style={{ width: '100%' }}>
                <SearchBar
                  lazyLoad
                  containerStyle={{ marginTop: 20, marginBottom: 20, width: '40%' }}
                  search={searchValue?.value}
                  placeholder={'Buscar por correo'}
                  onSearch={(value) => {
                    setSearchValue({ ...searchValue, value })
                  }}
                />
              </div>
            )}
            {currentTabClients === 'phone' && (
              <div style={{ width: '100%' }}>
                <SearchBar
                  lazyLoad
                  containerStyle={{ marginTop: 20, marginBottom: 20, width: '40%' }}
                  search={searchValue?.value}
                  placeholder={'Buscar por numero de telefono'}
                  onSearch={(value) => {
                    setSearchValue({ ...searchValue, value })
                  }}
                />
              </div>
            )}
          </div>
        )}
        {clientState.loading && (
          <NotFoundSource content={'Cargando Clientes'} />
        )}
        {!clientState.loading && !clientState.clients?.length && (
          <NotFoundSource content={'No hay resultados para mostrar'} />
        )}
        {!clientState.loading && !!clientState.clients?.length && (
          <ClientListWrapper>
            <ClientListContainer>
              {clientState.clients?.map((item, idx) => (
                <ClientCard key={idx} item={item}/>
              ))}
            </ClientListContainer>
          </ClientListWrapper>
        )}
      </ClientList>
    </ClientContainer>
  )
}

export const ClientListing = (props) => {
  const listProps = {
    ...props,
    UIComponent: ClientListingUI,
    useClients: true
  }
  return (
    <BackController {...listProps} />
  )
}
