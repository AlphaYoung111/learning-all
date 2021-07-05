import React, { memo, useEffect } from 'react'

import AYThemeHeaderRCM from '@/components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'
import AYTopRanking from '@/components/top-ranking'

export default memo(function AYRecommendRanking() {
  const dispatch = useDispatch()
  const state = useSelector(
    (state) => ({
      topUpList: state.getIn(['recommend', 'topUpList']),
      topNewList: state.getIn(['recommend', 'topNewList']),
      topOriginList: state.getIn(['recommend', 'topOriginList']),
    }),
    shallowEqual
  )

  // hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <div>
      <AYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <AYTopRanking info={state.topUpList} />
        <AYTopRanking info={state.topNewList} />
        <AYTopRanking info={state.topOriginList} />
      </div>
    </div>
  )
})
