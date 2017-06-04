import actionTypes from '../constants/actionTypes';

export const setFormField = (field, value) => {
  return {
      type: actionTypes.SIGNUP.SET_FORM_FIELD,
      data: { field, value },
    };
}
