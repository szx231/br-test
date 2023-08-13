import { createStore, combineReducers, applyMiddleware } from 'redux';
import dataReducer from './getData/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  dataReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
