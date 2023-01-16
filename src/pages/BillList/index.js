import React from 'react'
import { BillListing } from '../../components/BillListing'
import { useEvent } from '../../contexts/EventContext'

export const BillList = (props) => {
  const [events] = useEvent()

  const billProps = {
    ...props,
    goToPage: (page, params) => events.emit('go_to_page', { page, params }),
  }

  return (
    <BillListing {...billProps} />
  )
}

export default BillList
