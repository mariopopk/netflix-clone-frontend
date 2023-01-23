import Home from './components/Home/Home'
import { Routes as RouterRoutes, Route, useLocation } from 'react-router-dom'
import ShowModalSection from '../ShowModal/ShowModalSection'

export default function Routes() {
  return (
    <>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Home />} />
      </RouterRoutes>
    </>
  )
}
