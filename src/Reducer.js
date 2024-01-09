export const globalReducer = (
  state = { roles: [], categories: [], theme: "", language: "" },
  action
) => {
  switch (action.type) {
    // Basic set actions
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

// User Reducer
export const userReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    // Basic set actions
    case "SET_USER_INFO":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

// Product Reducer
export const productReducer = (
  state = {
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    activePage: 1,
    fetchState: "NOT_FETCHED",
  },
  action
) => {
  switch (action.type) {
    // Basic set actions
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "SET_TOTAL_PRODUCT_COUNT":
      return { ...state, totalProductCount: action.payload };
    case "SET_PAGE_COUNT":
      return { ...state, pageCount: action.payload };
    case "SET_ACTIVE_PAGE":
      return { ...state, activePage: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};

// ShoppingCart Reducer
export const shoppingCartReducer = (
  state = { cart: [], payment: {}, address: {} },
  action
) => {
  switch (action.type) {
    // Basic set actions
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

// Store Reducer
export const storeReducer = (state = { sellerStore: {} }, action) => {
  switch (action.type) {
    // Basic set actions
    case "SET_SELLER_STORE":
      return { ...state, sellerStore: action.payload };
    default:
      return state;
  }
};
