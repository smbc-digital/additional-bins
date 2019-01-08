import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import { ErrorPage } from 'smbc-react-components'
import DoYouRecycle from '../AdditionalBins/1-Do-You-Recycle'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ DoYouRecycle } />
                <Route exact path="/error" component={ ErrorPage } />
            </Switch>
        )
    }
}

export default App