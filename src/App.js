import React from 'react'
import { Route } from 'wouter'

// COMPONENTS
import HomePage from 'pages/HomePage/index'
import SearchResults from 'pages/SearchResults/index'

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
        path='/search'
      />
    </>
  )
}

export default App
