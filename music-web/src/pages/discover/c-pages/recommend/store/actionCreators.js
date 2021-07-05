import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
})

const changeHotRecomendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
})

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist,
})

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist,
})

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist,
})
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecomendAction(res))
    })
  }
}

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
})

export const getNewAlbumsAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (index) => {
  return (dispatch) => {
    getTopList(index).then((res) => {
      switch (index) {
        case 0:
          dispatch(changeNewListAction(res))
          break
        case 2:
          dispatch(changeOriginListAction(res))
          break
        case 3:
          dispatch(changeUpListAction(res))
          break
        default:
          console.log('其他数据处理')
      }
    })
  }
}
