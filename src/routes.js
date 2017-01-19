import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import FullMap from './containers/FullMap'
import MOMap from './containers/MOMap'
import NotFound from './components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={FullMap} onEnter={FullMap.onEnter}/>
            <Route path='mo/:mo' component={MOMap} onEnter={MOMap.onEnter}/>
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
);
