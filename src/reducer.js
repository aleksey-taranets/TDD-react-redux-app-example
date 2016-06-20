import { setEntries, next, vote } from './core';
import { Map } from 'immutable';
import {
  SET_ENTRIES, NEXT, VOTE
} from './constants';

export const INITIAL_STATE = Map();

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ENTRIES:
      return setEntries(state, action.entries);
    case NEXT:
      return next(state);
    case VOTE:
      return state.update('vote',
        voteState => vote(voteState, action.entry));
  }
  return state;
}