import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useEvent } from '../../contexts/EventContext'

export const ListenPageChanges = ({ children }) => {
  const navigate = useNavigate();
  const [events] = useEvent()

  const routes = {
    home: '/',
    bills: '/bills',
    clients: '/clients'
  }

  const handleGoToPage = ({ page, params = {}, search, replace = false }) => {
    let path = routes[page]
    if (path) {
      Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`:${key}`, value)
      })
      if (search) {
        path = `${path}${search}`
      }
      navigate(path)
    }
  }

  useEffect(() => {
    events.on('go_to_page', handleGoToPage)
    return () => {
      events.off('go_to_page', handleGoToPage)
    }
  }, [])

  return children
}

export default ListenPageChanges
