import initialState from './initialState';
import { ADD_ALARM } from '../actions/actionsType';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALARM: {
      return Object.assign({}, state, {
        alarms: [
          ...state.alarms,
          {
            id: action.id,
            title: action.title,
          },
        ],
      });
    }
    default:
      return state;
  }
};
