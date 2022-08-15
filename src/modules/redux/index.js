import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { doctorReducer } from './doctor/reducer';

// reducer
export const reducer = combineReducers({
  doctor: doctorReducer,
});

// store
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// dispatcher
export * from './doctor/action';

// selector
export * from './doctor/selector';
