import React, { memo, useEffect } from 'react'

import AYThemeHeaderRCM from '@/components/theme-header-rcm'
import AYSongsCover from '@/components/songs-cover'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import { HotRecommendWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendsAction } from '../../store/actionCreators'
export default memo(function AYHotRecommend() {
  const dispatch = useDispatch()

  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <AYThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <AYSongsCover info={item} key={item.id} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})
