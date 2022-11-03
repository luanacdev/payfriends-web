import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Signin } from '../pages/Signin'

// const token = localStorage.getItem('user_token')

// const Private = (Item: any) => {
//   if (typeof token === 'string') {
//     return <Item />
//   }
//   return <Signin />
// }

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* <Route path="/home" element={<Private Item={Home} />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}
