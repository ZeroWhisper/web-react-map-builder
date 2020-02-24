export const Type = {
  LOADING: `task/LOADING`,
  REQUEST: `task/REQUEST`,
  SUCCESS: `task/SUCCESS`,
  FAILURE: `task/FAILURE`,
  FIREBASE: `task/FIREBASE`,

  // CHANNLE: `task/CHANNLE`,
  ADD: `task/ADD`,
  DEL: `task/DEL`,
  UPD: `task/UPD`,
  GET: `task/GET`,
};

const INITIAL = {
  data: null,
  loading: false,
  error: false,
};

export default (state = INITIAL, { type, payload }) => {
  switch (type) {
    case Type.FIREBASE:
      return { ...state };

    case Type.REQUEST:
      return { ...state, error: false };

    case Type.SUCCESS:
      return { ...state, loading: false, data: payload };

    case Type.FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return { ...state };
  }
};

export const Creators = {
  // taskFirebase: payload => ({ type: Type.FIREBASE, payload }),
  // taskRequest: payload => ({ type: Type.REQUEST, payload }),
  taskSuccess: payload => ({ type: Type.SUCCESS, payload }),

  taskAdd: payload => ({ type: Type.ADD, payload }),
  taskDel: payload => ({ type: Type.DEL, payload }),
  taskUpdate: payload => ({ type: Type.UPD, payload }),
  // taskFailure: payload => ({ type: Type.FAILURE, payload }),
};
