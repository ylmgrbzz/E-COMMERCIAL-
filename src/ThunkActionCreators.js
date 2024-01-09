import axios from "axios";
import {
  setRoles,
  setCategories,
  setTheme,
  setLanguage,
} from "./actionCreators";

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { global } = getState();

    // Check if roles are already in the store, if not, fetch them
    if (global.roles.length === 0) {
      try {
        const baseURL = "https://workintech-fe-ecommerce.onrender.com";
        const response = await axios.get(`${baseURL}/roles`);
        const roles = response.data;

        // Dispatch the setRoles action to update the store
        dispatch(setRoles(roles));
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    }
  };
};
