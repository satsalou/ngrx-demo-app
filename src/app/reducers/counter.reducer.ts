import { Action } from '@ngrx/store'
import * as CounterActions from './../actions/counter.actions'
import { AppState } from '../models/app-state.model';

const initialAppState = {
  counter: 0
}

export function reducer(appState = initialAppState, action: CounterActions.Actions):AppState {
  switch (action.type) {
    case CounterActions.INCREMENT:
      appState.counter = appState.counter + 1;
      return Object.assign({ payload: action.payload }, appState);
    case CounterActions.DECREMENT:
      appState.counter = appState.counter - 1;
      return Object.assign({ payload: action.payload }, appState);
    default:
      return appState;
  }
}
