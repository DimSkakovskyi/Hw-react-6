import type { RouteInterface } from '../types/routeInteface'

import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import Articles from '../components/articles/Articles'
import Article from '../components/articles/Article'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Contacts from '../components/pages/Contacts'

export const routes: RouteInterface[] = [
  {
    path: '/',
    label: 'Home',
    Component: Home,
    showInMenu: true,
  },
  {
    path: '/about',
    label: 'About',
    Component: About,
    showInMenu: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    Component: Contacts,
    showInMenu: true,
  },  
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

