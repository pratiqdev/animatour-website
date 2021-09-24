import React from 'react'
import { Route, Switch, BrowserRouter as Router  } from 'react-router-dom'

import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import Docs from './pages/Docs'

const App = () => {

return(
  <ThemeProvider theme={theme} >
    <Router>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>

          <Route path="/testing">
            <h1>Testing</h1>
          </Route>

          <Route path="/docs">
            <Docs />
          </Route>

          <Route path="/demos">
            <h1>Demos</h1>
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  </ThemeProvider>
  )
}
export default App