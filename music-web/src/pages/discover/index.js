import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { DiscoverWrapper, TopMenu } from './style'

import { discoverMenu } from '@/common/local-data'
import { renderRoutes } from 'react-router-config'
export default memo(function AYDiscover(props) {
  const { route } = props

  return (
    <DiscoverWrapper>
      {/* 导航 */}
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {/* 路由 */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
