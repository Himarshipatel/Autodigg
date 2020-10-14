const initialState = {
  loading: false,
  carDetail: null,
  message: null,
  error: false,
  carmodal: { loading: false, error: false, message: null, carModalData: null },
};

const carSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAR_MAKE_PENDING":
      return {
        ...state,
        loading: true,
        carDetail: null,
      };
    case "CAR_MAKE_SUCCESS":
      return {
        ...state,
        loading: false,
        carDetail: action.carDetail,
      };
    case "CAR_MAKE_FAILURE":
      return { ...state, loading: false, error: true, message: action.message };
    case "CAR_MODAL_PENDING":
      return {
        ...state,
        carmodal: { loading: true, carModalData: null },
      };
    case "CAR_MODAL_SUCCESS":
      return {
        ...state,
        carmodal: { loading: false, carModalData: action.carModalData },
      };
    case "CAR_MODAL_FAILURE":
      return {
        ...state,
        carmodal: { loading: false, error: false, message: null },
      };

    default:
      return { ...state };
  }
};
export default carSearchReducer;
