import type { RouteInterface } from '../types/routeInteface'

import Contacts from '../components/pages/Contacts'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import Articles from '../components/articles/Articles'
import Article from '../components/articles/Article'


export const routes: RouteInterface[] = [
  {
    path: '/login',
    label: 'Login',
    Component: Login,
    showInMenu: true,
  },
  {
    path: '/registration',
    label: 'Registration',
    Component: Registration,
    showInMenu: true,
  },
  {
    path: '/articles',
    label: 'Articles',
    Component: Articles,
    showInMenu: true,
  },
  {
    path: '/articles/:slug/:id',
    label: 'Article',
    Component: Article,
    showInMenu: false,
  },
]

