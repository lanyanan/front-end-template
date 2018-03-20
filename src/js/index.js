import React from 'react'
import { render } from 'react-dom'
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import '../css/style.scss';
import store from './store/store';
import Rout from './router/router';

//import Home from './Home';
import Loading from './components/Loading';

const AsyncHome = Loadable({
  loader: () => import("./components/Home"),
  loading: Loading
});


import {Router, Route, Switch, BrowserRouter, HashRouter, Redirect} from 'react-router-dom'



//等DOM加载完成
//这种是hash值改变的
document.addEventListener('DOMContentLoaded', ()=>{
	render((   
		<Provider store={store}>
	        <Rout></Rout>
	  	</Provider>		
	), document.getElementById('ROOT'))
});
