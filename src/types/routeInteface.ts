import type { FC } from 'react'

export interface RouteInterface {
  path: string
  label: string
  Component: FC
  showInMenu: boolean
}
