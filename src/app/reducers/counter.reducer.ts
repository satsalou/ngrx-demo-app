import { Action } from '@ngrx/store'
import * as CounterActions from './../actions/counter.actions'

const initialAppState = {
  counter: 0
}

export function reducer(appState = initialAppState, action: CounterActions.Actions) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      appState.counter = appState.counter + 1;
      return {
        counter: appState.counter,
        payload: action.payload
      }
    case CounterActions.DECREMENT:
      appState.counter = appState.counter - 1;
      return {
        counter: appState.counter,
        payload: action.payload
      };
    default:
      return appState;
  }
}
