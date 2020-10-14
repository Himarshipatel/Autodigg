import axios from "axios";
import { config } from "../../common";
export const carMake = () => {
  return (dispatch) => {
    dispatch({ type: "CAR_MAKE_PENDING" });
    axios
      .get(`${config.apiUrl}/carMake`)

      .then((res) => {
        dispatch({
          type: "CAR_MAKE_SUCCESS",
          carDetail: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: "CAR_MAKE_FAILURE", message: error.message });
      });
  };
};
export const carModal = (id) => {
  return (dispatch) => {
    dispatch({ type: "CAR_MODAL_PENDING" });
    axios
      .get(`${config.apiUrl}/carModel/${id}`)

      .then((res) => {
        dispatch({
          type: "CAR_MODAL_SUCCESS",
          carModalData: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: "CAR_MODAL_FAILURE", message: error.message });
      });
  };
};
