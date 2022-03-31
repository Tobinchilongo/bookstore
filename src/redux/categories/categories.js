const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';
const InitialState = [];

const CategoriesReducer = (state = InitialState, action) => {
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
