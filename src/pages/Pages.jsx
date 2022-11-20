import React from 'react'
import Home from '../components/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
function Pages() {
  return (
    <div>
       <Routes>
        <Route path="/document" element={<Home/>} />
        <Route path="/cuisine/:type" />
        <Route path="/searched/:search"/>
        <Route path="/recipe/:name"/>
      </Routes>
    </div>
  )
}

export default Pages