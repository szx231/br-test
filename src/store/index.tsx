import { createStore, combineReducers, applyMiddleware } from 'redux';
import dataReducer from './getData/reducers';
import allFieldseducer from './tarif/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  dataReducer,
  allFieldseducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
