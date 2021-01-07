import React, {useEffect, useState} from 'react'
import { Route, Switch, Redirect } from 'wouter'

// PAGES
import HomePage from 'pages/HomePage/index'
import SearchResults from 'pages/SearchResults/index'
import MovieDetail from 'pages/MovieDetail/index'
import NotFoundPage from 'pages/NotFoundPage/index'

// COMPONENTS
import NavBar from 'components/NavBar/index'
import Footer from 'components/Footer/index'

// STYLES
import 'static/css/index.css'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-schema: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <main className={mainClass}>
      <NavBar setTheme={setDarkMode} theme={darkMode}/>
      <Switch>
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
        <Redirect from='*' to='/404'/>
      </Switch>
      <Footer/>
    </main>
  )
}

export default App
