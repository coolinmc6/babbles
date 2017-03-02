import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from "./routes";


// userCreator();

import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  		<Router history={browserHistory} routes={routes}/>
  	</Provider>,
  document.getElementById('root')
);
