const initialState = {
  loading: false,
  contact: null,
  message: null,
  error: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONTACT_US_PENDING":
      return {
        ...state,
        loading: true,
        contact: null,
      };
    case "CONTACT_US_SUCCESS":
      return {
        ...state,
        loading: false,
        contact: action.contact,
      };
    case "CONTACT_US_FAILURE":
      return { ...state, loading: false, error: true, message: action.message };

    default:
      return { ...state };
  }
};
export default contactReducer;
