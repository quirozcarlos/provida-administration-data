import React from 'react'
import { HomeHero } from '../../components/HomeHero'
import { useEvent } from '../../contexts/EventContext'

import { HomeContainer } from './styles'

export const HomePage = (props) => {
  const [events] = useEvent()
  const homeProps = {
    ...props,
    goToPage: (page, params) => events.emit('go_to_page', { page, params })
  }
  return (
    <HomeContainer>
      <HomeHero {...homeProps} />
    </HomeContainer>
  )
}

export default HomePage
