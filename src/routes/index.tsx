import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ModalRemovePayment } from '../components/Modals/ModalRemovePayment'
import { Home } from '../pages/Home'
import { Signin } from '../pages/Signin'
import { PrivateRoute } from './PrivateRoute'

export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<ModalRemovePayment />} />
        </Route>
      </Routes>
    </Router>
  )
}
