import { Outlet, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/employees', label: 'Employees', icon: '👥' },
  { to: '/attendance', label: 'Attendance', icon: '📅' },
]

export default function MainLayout() {
  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <aside className="sidebar" aria-label="Main navigation">
        <div className="sidebar-brand">HRMS Lite</div>
        <nav className="sidebar-nav">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                'sidebar-link' + (isActive ? ' active' : '')
              }
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              <span className="sidebar-link-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="main-wrapper">
        <header className="top-header">
          <h1 className="h5 mb-0">HRMS Lite</h1>
        </header>
        <main id="main-content" className="main-content" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
