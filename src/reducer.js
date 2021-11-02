export const initialState = {basket: []}
export const actionTypes = { SET_USER: "ADD_BOOKMARK", RE_MOVE: "REMOVE_BASKET"}

const reducer = (state, action) => {
  console.log(action)
  switch(action.type){
    case actionTypes.SET_USER:
      return{
        ...state,
        basket: [...action.basket, action.basket]
      }
    case actionTypes.RE_MOVE:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)
      if (index >=0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its not in Basket`);
      }
      return {...state, basket: [newBasket]}
      default:
        return state
  }
}
export default reducer