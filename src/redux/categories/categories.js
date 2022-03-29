const IntState = [];
const CHECK_STATUS = 'CHECK_STATUS';

const CategoriesReducer = (state = IntState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'under construction';
    default:
      return state;
  }
};
export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});
export default CategoriesReducer;
