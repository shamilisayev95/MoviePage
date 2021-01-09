import constants from '../constants/constants';
export const initialState = {
  loading: true,
  movies: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case constants.SAVE_CARDS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    default:
      return state;
  }
};
