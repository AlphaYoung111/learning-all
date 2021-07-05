import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import AYAppHeader from '@/components/app-header'
import AYAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AYAppHeader />
        {renderRoutes(routes)}
        <AYAppFooter />
      </HashRouter>
    </Provider>
  )
})
