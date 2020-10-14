import axios from "axios";

export const carMake = () => {
  return (dispatch) => {
    dispatch({ type: "CAR_MAKE_PENDING" });
    axios
      .get("http://tasks.infynno.com/api/test/carMake")

      .then((res) => {
        console.log(res);
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
export const carModal = (himarshi) => {
  console.log(himarshi);
  return (dispatch) => {
    dispatch({ type: "CAR_MODAL_PENDING" });
    axios
      .get(`http://tasks.infynno.com/api/test/carModel/${himarshi}`)

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
