import React, { memo } from 'react'
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style'

import AYTopBanner from './c-cpns/top-banners'
import AYHotRecommend from './c-cpns/hot-recommend'
import AYNewAlbum from './c-cpns/new-album'
import AYRecommendRanking from './c-cpns/recommend-ranking'
function AYRecommend(props) {
  return (
    <RecommendWraper>
      <AYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <AYHotRecommend />
          <AYNewAlbum />
          <AYRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
}

export default memo(AYRecommend)
