import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { AppState } from './models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('app').subscribe(state => {
      console.log(state);
      this.counter = state.counter;
    });
  }

  add() {
    this.store.dispatch({
      type: 'Increment',
      payload: 1
    });
  }

  subtract() {
    this.store.dispatch({
      type: 'Decrement',
      payload: 1
    });
  }
}
