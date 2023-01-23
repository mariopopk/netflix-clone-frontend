import Home from './components/Home/Home'
import { Routes as RouterRoutes, Route, useLocation } from 'react-router-dom'
import ShowModalSection from '../ShowModal/ShowModalSection'

export default function Routes() {
  const location = useLocation()
  const background = location.state && location.state.background
  return (
    <>
      <RouterRoutes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Home />}>
          <Route path="/browse/:id" element={<ShowModalSection />} />
        </Route>
      </RouterRoutes>

      {background && (
        <RouterRoutes>
          <Route path="/browse/:id" element={<ShowModalSection />} />
        </RouterRoutes>
      )}
    </>
  )
}
