import { NavLink } from 'react-router'
import { routes } from '../../config/routes.config'

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes
          .filter((route) => route.showInMenu)
          .map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu
