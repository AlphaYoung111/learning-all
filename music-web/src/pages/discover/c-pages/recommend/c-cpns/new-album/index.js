import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { AlbumWrapper } from './style'
import { getNewAlbumsAction } from '../../store/actionCreators'
import { NEW_ALBUMS_LIMIT } from '@/common/constants'
import AYThemeHeaderRCM from '@/components/theme-header-rcm'
import AYAlbumCover from '@/components/album-cover'
import { Carousel } from 'antd'
export default memo(function AYNewAlbum() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUMS_LIMIT))
  }, [dispatch])

  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  )
  console.log(newAlbums)
  const carouselRef = useRef()

  return (
    <AlbumWrapper>
      <AYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AYAlbumCover key={item.id} info={item} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  )
})
