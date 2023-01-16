import React from 'react'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

import { Container,  Image } from './styles'

export const NotNetworkConnectivity = () => {
  const onlineStatus = useOnlineStatus()
  return (
    <Container id='container' isOnline={onlineStatus}>
      <Image>
        No network connectivity
      </Image>
    </Container>
  )
}
