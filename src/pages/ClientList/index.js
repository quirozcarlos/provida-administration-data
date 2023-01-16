import React from 'react'
import { ClientListing } from '../../components/ClientListing'
import { useEvent } from '../../contexts/EventContext'

export const ClientList = (props) => {
  const [events] = useEvent()

  const clientProps = {
    ...props,
    goToPage: (page, params) => events.emit('go_to_page', { page, params }),
  }

  return (
    <ClientListing {...clientProps} />
  )
}

export default ClientList
