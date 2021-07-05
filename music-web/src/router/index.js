import { Redirect } from 'react-router-dom'

import AYDiscover from '@/pages/discover'
import AYMine from '@/pages/mine'
import AYFriend from '@/pages/friend'

//discover
import AYRecommend from '@/pages/discover/c-pages/recommend'
import AYSongs from '@/pages/discover/c-pages/songs'
import AYRanking from '@/pages/discover/c-pages/ranking'
import AYArtist from '@/pages/discover/c-pages/artist'
import AYDJRadio from '@/pages/discover/c-pages/djradio'
import AYAlbum from '@/pages/discover/c-pages/album'
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: AYDiscover,
    routes: [
      {
        path: '/discover/recommend',
        component: AYRecommend,
      },
      {
        path: '/discover/songs',
        component: AYSongs,
      },
      {
        path: '/discover/artist',
        component: AYArtist,
      },
      {
        path: '/discover/album',
        component: AYAlbum,
      },
      {
        path: '/discover/ranking',
        component: AYRanking,
      },
      {
        path: '/discover/djradio',
        component: AYDJRadio,
      },
    ],
  },
  {
    path: '/mine',
    component: AYMine,
  },
  {
    path: '/friend',
    component: AYFriend,
  },
]

export default routes
