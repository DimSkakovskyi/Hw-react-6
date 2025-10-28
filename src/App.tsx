import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import { routes } from './config/routes.config'
import NotFound from './components/pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {routes
          .filter((route) => route.showInMenu)
          .map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {route.label}
            </NavLink>
          ))}
      </nav>

      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
