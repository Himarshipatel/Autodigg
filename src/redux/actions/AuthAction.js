import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";
export const signinUser = (data) => {
  return (dispatch) => {
    dispatch({ type: "SIGN_IN_PENDING" });

    axios
      .post(`${config.apiUrl}/login`, data)

      .then((res) => {
        dispatch({ type: "SIGN_IN_SUCCESS", login: res.data });

        toast.success("welcome", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

      .catch((error) => {
        dispatch({ type: "SIGN_IN_FAILURE", message: error.message });
      });
  };
};
export const signupUser = (data) => {
  return (dispatch) => {
    dispatch({ type: "SIGN_UP_PENDING" });

    axios
      .post(`${config.apiUrl}/register`, data)

      .then((res) => {
        dispatch({ type: "SIGN_UP_SUCCESS" });

        toast.success("SignUp Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

      .catch((error) => {
        dispatch({ type: "SIGN_UP_FAILURE", message: error.message });
      });
  };
};
