import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Action
 */
const INCREMENT = 'INCREMENT';

function increase(diff) {
	return {
		type: INCREMENT,
		addBy: diff
	};
}

/**
 * Reducer
 */
const initialState = {
	value: 0
};

const counterReducer = (state = initialState, action) => {
	switch(action.type) {
		case INCREMENT:
			return Object.assign({}, state, {
				value: state.value + action.addBy
			});
		default:
			return state;
	}
}

/**
 * Store
 */
const store = createStore(counterReducer);

const render = () => {
	
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
