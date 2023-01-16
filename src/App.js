import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import loadable from '@loadable/component'

import { useOnlineStatus } from './hooks/useOnlineStatus'
import { useEvent } from './contexts/EventContext'

import { SpinnerLoader } from './components/SpinnerLoader'
import { Header } from './components/Header'
import { NotNetworkConnectivity } from './components/NotNetworkConnectivity'

const BillList = loadable(() => import('./pages/BillList'))
const ClientList = loadable(() => import('./pages/ClientList'))
const HomePage = loadable(() => import('./pages/Home'))
const PageNotFound = loadable(() => import('./pages/PageNotFound'))

const ListenPageChanges = loadable(() => import('./components/ListenPageChanges'))

export const App = () => {
  const [events] = useEvent()
  const onlineStatus = useOnlineStatus()

  const [loaded] = useState(true)

  const goToPage = (page, params) => events.emit('go_to_page', { page, params })

  const routes = [
    { name: 'Home', path: '/', element: HomePage },
    { name: 'Bills', path: '/bills', element: BillList },
    { name: 'Clients', path: '/clients', element: ClientList },
    { name: '404', path: '*', element: PageNotFound },
  ];

  return (
    <div>
      {!loaded ? <SpinnerLoader /> : (
        <>
          <ListenPageChanges />
          <Header goToPage={goToPage} />
          <NotNetworkConnectivity />

          {onlineStatus && (
            <Routes>
              {routes.map((route, key) => (
                <Route
                  key={key}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          )}
        </>
      )}
    </div>
  )
}

export default App;
