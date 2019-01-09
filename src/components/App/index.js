import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { getPageRoute } from '../../helpers/pagehelper'
import { ErrorPage } from 'smbc-react-components'
import DoYouRecycle from '../AdditionalBins/1-Do-You-Recycle'
import WhyMoreSpace from '../AdditionalBins/2-Why-More-Space'
import OrderRecyclingBins from '../AdditionalBins/8-Order-Recycling-Bins';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={getPageRoute(1)} component={ DoYouRecycle } />
                <Route exact path={getPageRoute(2)} component={ WhyMoreSpace } />
                <Route exact path={getPageRoute(8)} component={ OrderRecyclingBins } />
                <Route exact path="/error" component={ ErrorPage } />
            </Switch>
        )
    }
}

export default App