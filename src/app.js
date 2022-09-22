import React, {useContext, useState, Suspense} from 'react'
import { Route, BrowserRouter as Router, Routes, Navigate, useParams } from 'react-router-dom'
import { Logo } from './components/logo'
import { Home } from './pages/home'
import { CategoryPet } from './pages/categoryPet'
import { Profile } from './pages/profile'
import { Detail } from './pages/detail'
import { NotFound } from './pages/notFound'
import { Login } from './pages/login'
import { Navbar } from './components/navbar'
import Context from './context'
import { GlobalStyle } from './styles/globalStyled'
import styled from 'styled-components'
import { PhotoCardWithQuery } from './container/photoCardWithQuery'
import { Topbar } from './components/topvar/topvar'

const Favorite = React.lazy(() => import('./pages/favorite').then(module => ({ default: module.Favorite })))

const App = () => {
  

  return (
    <Context.Consumer>
      {({ isAuth }) => {
        return (
          <Router>
            <Suspense fallback={<div />}>
              <GlobalStyle />
              <Topbar isAuth={isAuth} />
              <Routes>   
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home isAuth={isAuth} />} />
                <Route path="/login" element={!isAuth ? <Login /> : <Navigate replace to="/" />} />
                <Route path="/pet/:id" element={<CategoryPet />} />
                <Route path="/detail/:detailId" element={<Detail />} />
                <Route path="/favorite" element={isAuth ? <Favorite /> : <Navigate replace to="/login"/>} />
                <Route path="/profile" element={isAuth ? <Profile /> : <Navigate replace to="/login"/>} />
              </Routes>
              <Navbar />
            </Suspense>
          </Router>
        )
      }}
    </Context.Consumer>
  )
}

export default App
