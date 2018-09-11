import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

export const INCREMENT = 'Increment'
export const DECREMENT = 'Decrement'

export class Increment implements Action {
  readonly type = INCREMENT

  constructor(public payload: number) { }
}

export class Decrement implements Action {
  readonly type = DECREMENT

  constructor(public payload: number) { }
}

export type Actions = Increment | Decrement;
