import React, { Component } from 'react';
import Loadable from 'react-loadable';
import {Router, Route, Switch, BrowserRouter, HashRouter, Redirect} from 'react-router-dom';
import Loading from '../components/loading';

const AsyncHome = Loadable({
  loader: () => import("../components/home"),
  loading: Loading
});


/**
 * 所有的路由在这里定义
 */

class Rout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exzact path="/home" component={AsyncHome} />
                    <Redirect path="/" to={{pathname: '/home'}} />
                </Switch>
            </HashRouter>
        )
    }
}

export default Rout