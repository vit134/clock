import { ADD_ALARM } from './actionsType';

export function addAlarm(id, title) {
  return {
    type: ADD_ALARM,
    id,
    title,
  };
}

