import {ADD, SUB} from './constant'

export const createAddAction = (data) => {
  return {
    type: ADD,
    data: data,
  };
}

export const createSubAction = (data) => {
  return {
    type: SUB,
    data: data,
  };
}
