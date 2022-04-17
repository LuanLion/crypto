import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  userLogin:"",
  userInfo: null,
  clientInfo: null,
  users :[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
     
      return {
        ...state,
        isLoggedIn: true,
        userLogin: action.data,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };


    // //4.actions for create new user
    // case actionTypes.CREATE_NEW_USER_START:
    //   state.isLoading = true;
    //   return {
    //     ...state,
    //   };
    // case actionTypes.CREATE_NEW_USER_SUCCESS:
    //   //add data to API for state of reducer
    //   state.isLoading = false;
    //   return {
    //     ...state,
    //   };
    // case actionTypes.CREATE_NEW_USER_FAILDED:
    //   state.isLoading = false;
    //   return {
    //     ...state,
    //   };

    // //5.actions for fetch all user

    case actionTypes.FETCH_ALL_USER_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      //add data to API for state of reducer
      state.users = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILDED:
      state.users = [];
      return {
        ...state,
      };
    // //6. actions for fetch one user
    // case actionTypes.FETCH_ONE_USER_START:
    //   return {
    //     ...state,
    //   };
    // case actionTypes.FETCH_ONE_USER_SUCCESS:
    //   //add data to API for state of reducer
    //   state.userUpdate = action.data.users;
    //   state.autoAction = true;
    //   return {
    //     ...state,
    //   };
    // case actionTypes.FETCH_ONE_USER_FAILDED:
    //   state.userUpdate = [];
    //   return {
    //     ...state,
    //   };

    // //7.delete user

    // case actionTypes.DELETE_USER_START:
    //   state.isLoading = true;
    //   return {
    //     ...state,
    //   };
    // case actionTypes.DELETE_USER_SUCCESS:
    //   //add data to API for state of reducer
    //   state.isLoading = false;
    //   return {
    //     ...state,
    //   };
    // case actionTypes.DELETE_USER_FAILD:
    //   state.isLoading = false;
    //   return {
    //     ...state,
    //   };
    // //8.update user
    // case actionTypes.UPDATE_USER_START:
    //   state.isLoading = true;
    //   return {
    //     ...state,
    //   };
    // case actionTypes.UPDATE_USER_SUCCESS:
    //   //add data to API for state of reducer
    //   state.isLoading = false;
    //   return {
    //     ...state,
    //   };
    // case actionTypes.UPDATE_USER_FAILD:
    //   state.isLoading = false;
    //   return {
    //     ...state,
    //   };



    default:
      return state;
  }
};

export default userReducer;
