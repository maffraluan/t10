import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, About, Services, Portfolio, Contact } from './pages'


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/services"} component={Services} />
        <Route path={"/portfolio"} component={Portfolio} />
        <Route path={"/contact"} component={Contact} />
      </Switch>
    </Router>
  )
}

export default Routes;
