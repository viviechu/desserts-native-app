import actionTypes from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  userEmail: '',
  userPassword: '',
  showError: false,
};

export default function counter(state = initialState, action = {}) {
  const actionType = action.type;
  const actionData = action.data;
  switch (actionType) {
    case actionTypes.SIGNUP.SET_FORM_FIELD:
      return Object.assign({}, state, { [`user${actionData.field}`]: actionData.value });
    default:
      return state;
  }
}
