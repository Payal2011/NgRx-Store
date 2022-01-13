
import { Employee } from 'src/app/model/employee.model';
import { EmployeeActionsType, EmployeeActions } from './actions';

export interface EmployeeState {
  list: Employee[],
  loading: boolean,
  error: Error

}
const initialState: EmployeeState = {
  list: [],
  loading: false,
  error: undefined
}

export function EmployeeReducer(
  state: EmployeeState = initialState, action: EmployeeActionsType) {
  switch (action.type) {
    case EmployeeActions.EmployeeLoaded:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case EmployeeActions.AddSuccess:
      return {
        ...state,
        list: [action.payload, ...state.list,],
        loading: false,
      };

    case EmployeeActions.RemoveSuccess:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };

    case EmployeeActions.UpdateSuccess:
      var updated = state.list.map((m) => {
        if (m.id === action.payload.id) {
          return action.payload
        }
        return m;
      });
      return {
        ...state,
        list: updated,
        loading: false
      };
    default:
      return state;
  }
}

