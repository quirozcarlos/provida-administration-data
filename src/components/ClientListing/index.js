import React, { useEffect, useState } from 'react'

import { ClientContainer, ClientList, ClientListContainer, ClientListWrapper } from './styles'
import { BackController } from '../BackController'
import { NotFoundSource } from '../NotFoundSource'
import { SearchBar } from '../SearchBar'
import { ClientCard } from './ClientCard'
import { Button } from '../Shared/Buttons'

import 'react-datepicker/dist/react-datepicker.css';

const ClientListingUI = (props) => {
  const {
    clientState
  } = props

  return (
    <ClientContainer>
      <ClientList>
        <div style={{ }}>
          <div>
            <h1 id='title'>List of Clients</h1>
          </div>
          {/* <SearchBar
            lazyLoad
            search={searchValue?.type === 'billid' && searchValue?.value}
            placeholder={'Search by id'}
            onSearch={(value) => setSearchValue({
              ...searchValue,
              type: 'billid',
              value
            })}
          /> */}
        </div>
        {clientState.loading && (
          <NotFoundSource content={'Loading Clients'} />
        )}
        {!clientState.loading && !!clientState.result?.length && (
          <ClientListWrapper>
            <ClientListContainer>
              {clientState.result?.map((item, idx) => (
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
