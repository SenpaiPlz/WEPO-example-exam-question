import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import reducers from '../src/Redux/Reducers/reducers'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

ReactDOM.render(<Provider store={createStore(reducers,applyMiddleware(thunk))}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
