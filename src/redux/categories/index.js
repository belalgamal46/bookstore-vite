const initialState = {
  categories: [],
  status: '',
};

const STATUS_CHANGED = 'bookstore/categories/statusChanged';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: 'Under construction',
      };

    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: STATUS_CHANGED,
});

export default reducer;
