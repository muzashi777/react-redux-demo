import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";
const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    shirt: {
      name: "Shirt",
      tagName: "shirt",
      price: 10,
      numbers: 0,
      inCart: false,
    },
    shorts: {
      name: "Shorts",
      tagName: "shorts",
      price: 11,
      numbers: 0,
      inCart: false,
    },
    cap: {
      name: "Cap",
      tagName: "cap",
      price: 12,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };

      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };

      productSelected.numbers += 1;

      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: { ...state.products, [action.payload]: productSelected },
        basketNumbers: state.basketNumbers + 1,
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newBasketNumbers = 0;
      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        newCartCost = state.cartCost;
        newBasketNumbers = 0;
      } else {
        productSelected.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasketNumbers = 1;
      }
      return {
        ...state,
        cartCost: newCartCost,
        products: { ...state.products, [action.payload]: productSelected },
        basketNumbers: state.basketNumbers - newBasketNumbers,
      };

    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numberBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return {
        ...state,
        cartCost:
          state.cartCost - state.products[action.payload].price * numberBackup,
        products: { ...state.products, [action.payload]: productSelected },
        basketNumbers: state.basketNumbers - numberBackup,
      };
    default:
      return state;
  }
};
