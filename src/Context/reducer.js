export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, basket: state.basket.filter(({ id }) => id !== action.payload) };
    case "SET_USER":
      return { ...state, user: action.payload }
    default:
      return state;
  }
}
export default reducer;