export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";

// dummy User
const dummy = {
  id: 1,
  nickName: "stefan",
  password: "12345",
};

export const initialState = {
  isLogged: false,
  isLogging: false,
  isSigned: false,
  isSigningUp: false,
  me: null,
  userInfo: {
    // 남의 정보
    id: "",
    nickName: "",
    password: "",
  },
  followingList: [],
  followerList: [],
  error: "",
};

export const LOG_OUT = {
  type: LOG_OUT_REQUEST,
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //LOG_IN, LOG_OUT
    case LOG_IN_REQUEST:
      return { ...state, isLogged: false, isLogging: true, me: null };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLogging: false,
        me: dummy,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLogged: false,
        isLogging: false,
        me: null,
        error: e,
      };

    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLogged: false,
        isLogging: false,
        me: null,
      };
    // SIGN_UP
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSigned: false,
        isSigningUp: true,
        me: action.data, // signup.js에서 dispatch에 data를 넣어줌. (onSubmit의 else에 위치)
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigned: true,
        isSigningUp: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSigned: false,
        isSigningUp: false,
        error: e,
      };

    default:
      return { ...state };
  }
};

export default reducer;
