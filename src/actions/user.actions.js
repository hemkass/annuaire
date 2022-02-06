import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: GET_USERS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
