import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Imports from './pages/Import'
import Import1 from './pages/Import2018EgyptRice'
import Import2 from './pages/Import2019EgyptRice'
import Import3 from './pages/Import2020EgyptRice'
import Import4 from './pages/Import2018EgyptWheat'
import Import5 from './pages/Import2019EgyptWheat'
import Import6 from './pages/Import2020EgyptWheat'
import Import7 from './pages/Import2018SARice'
import Import8 from './pages/Import2019SARice'
import Import9 from './pages/Import2020SARice'
import Import10 from './pages/Import2018SAWheat'
import Import11 from './pages/Import2019SAWheat'
import Import12 from './pages/Import2020SAWheat'
import Predict from './pages/Predict'
import Banana from './pages/Banana'
import Mangoes from './pages/Mangoes'
import ChatInterfaceHistory from './pages/ChatInterfaceHistory'


// This is the main routing for the application
class MainRouter extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/import' component={Imports}/>
          <Route exact path='/import2018EgyptRice' component={Import1}/>
          <Route exact path='/import2019EgyptRice' component={Import2}/>
          <Route exact path='/import2020EgyptRice' component={Import3}/>
          <Route exact path='/import2018EgyptWheat' component={Import4}/>
          <Route exact path='/import2019EgyptWheat' component={Import5}/>
          <Route exact path='/import2020EgyptWheat' component={Import6}/>
          <Route exact path='/import2018SARice' component={Import7}/>
          <Route exact path='/import2019SARice' component={Import8}/>
          <Route exact path='/import2020SARice' component={Import9}/>
          <Route exact path='/import2018SAWheat' component={Import10}/>
          <Route exact path='/import2019SAWheat' component={Import11}/>
          <Route exact path='/import2020SAWheat' component={Import12}/>
          <Route exact path='/ChatInterfaceHistory' component={ChatInterfaceHistory}/>
        </Switch>
      </main>
    )
  }
}

export default MainRouter


