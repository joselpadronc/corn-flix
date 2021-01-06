import React from 'react'
import { Route } from 'wouter'

// COMPONENTS
import HomePage from 'pages/HomePage/index'
import SearchResults from 'pages/SearchResults/index'
import MovieDetail from 'pages/MovieDetail/index'

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
    </>
  )
}

export default App
