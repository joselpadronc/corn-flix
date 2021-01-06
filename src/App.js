import React from 'react'
import { Route, Redirect } from 'wouter'

// COMPONENTS
import HomePage from 'pages/HomePage/index'
import SearchResults from 'pages/SearchResults/index'
import MovieDetail from 'pages/MovieDetail/index'
import NotFoundPage from 'pages/NotFoundPage/index'

// STYLES
import 'static/css/App.css'

function App() {
  return (
    <>
      <Route
        component={HomePage}
        path='/'
      />
      <Route
        component={SearchResults}
        path='/search/:keyword'
      />
      <Route
        component={MovieDetail}
        path='/movie/:id'
      />
      <Route
        component={NotFoundPage}
        path='/404'
      />
      <Redirect to='/404'/>
    </>
  )
}

export default App
