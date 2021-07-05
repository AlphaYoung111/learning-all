import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { BannerControl, BannerWrapper, BannerLeft, BannerRight } from './style'
import { useCallback } from 'react'

export default memo(function AYTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get('recommend').get('topBanners'),
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )

  const bannerRef = useRef()

  // api
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  ></img>
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
