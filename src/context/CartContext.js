import { cartReducer } from "../reducer/cartReducer";

const { createContext, useContext, useReducer } = require("react");

const initialState = {
  cartList: [],
  total: 0,
};

const cartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedCartList },
    });
    updateTotal(updatedCartList);
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedCartList },
    });
    updateTotal(updatedCartList);
  };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.price));
    dispatch({
      type: "UPDATE_TOTAL",
      payload: { total },
    });
  };
  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};
