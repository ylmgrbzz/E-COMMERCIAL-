// Global Actions
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

// User Actions
export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  payload: userInfo,
});

// Product Actions
export const setProductList = (productList) => ({
  type: "SET_PRODUCT_LIST",
  payload: productList,
});
export const setTotalProductCount = (count) => ({
  type: "SET_TOTAL_PRODUCT_COUNT",
  payload: count,
});
export const setPageCount = (count) => ({
  type: "SET_PAGE_COUNT",
  payload: count,
});
export const setActivePage = (page) => ({
  type: "SET_ACTIVE_PAGE",
  payload: page,
});
export const setFetchState = (state) => ({
  type: "SET_FETCH_STATE",
  payload: state,
});

// ShoppingCart Actions
export const setCart = (cart) => ({ type: "SET_CART", payload: cart });
export const setPayment = (payment) => ({
  type: "SET_PAYMENT",
  payload: payment,
});
export const setAddress = (address) => ({
  type: "SET_ADDRESS",
  payload: address,
});

// Store Actions
export const setSellerStore = (store) => ({
  type: "SET_SELLER_STORE",
  payload: store,
});
