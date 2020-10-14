import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";
export const contactUs = (data) => {
  return (dispatch) => {
    dispatch({ type: "CONTACT_US_PENDING" });

    axios
      .post(`${config.apiUrl}/contactUs`, data)

      .then((res) => {
        dispatch({ type: "CONTACT_US_SUCCESS", contact: res.data });

        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

      .catch((error) => {
        dispatch({ type: "CONTACT_US_FAILURE", message: error.message });
      });
  };
};
