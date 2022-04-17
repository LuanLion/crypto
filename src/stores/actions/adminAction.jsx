import actionTypes from "./actionTypes";
import {
  createNewUserService,
  getAlluser,
  deleteUserService,
  updateUserService,
  handleLoginApi
} from "../../api/apiUser";
import { toast } from "react-toastify";


import { dispatch } from "../../redux";

// 4.CREATE NEW USER
export const loginStart = async(email,passWord) => {
    try {
      let res = await handleLoginApi(email,passWord);
     console.log("res: ",res)
      if (res && res.error == 0) {
        dispatch(loginSuccess(res.name));
      } else {
        toast.error("Login Fail");
      }
    } catch (e) {
      dispatch(loginFaided());
    }

};

export const loginSuccess = (data) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  data:data   
});
export const loginFaided = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});

//FETCH ALL USER

export const fetchAllUserStart = async () => {
  let res = await getAlluser();
  if (res && res.error === 0) {
    dispatch(fetchAllUserSuccess(res.data));
  } else {
    dispatch(fetchAllUserFaided());
  }
};
export const fetchAllUserSuccess = (Alluser) => ({
  type: actionTypes.FETCH_ALL_USER_SUCCESS,
  data: Alluser
});
export const fetchAllUserFaided = () => ({
  type: actionTypes.FETCH_ALL_USER_FAILDED,
});
// //6.FETCH ONE USER
// export const fetchOneUserStart = (idData) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: actionTypes.FETCH_ONE_USER_START });
//       let res = await getAlluser(idData);

//       if (res && res.errcode === 0) {
//         dispatch(fetchOneUserSuccess(res));
//       } else {
//         dispatch(fetchOneUserFaided());
//       }
//     } catch (e) {
//       dispatch(fetchOneUserFaided());
//     }
//   };
// };
// export const fetchOneUserSuccess = (Oneuser) => ({
//   type: actionTypes.FETCH_ONE_USER_SUCCESS,
//   data: Oneuser,
// });
// export const fetchOneUserFaided = () => ({
//   type: actionTypes.FETCH_ONE_USER_FAILDED,
// });

// //7.DELETE ONE USRR
// export const deleteUserStart = async (userArr) => {

//   try {
//       dispatch({ type: actionTypes.DELETE_USER_START });
//       let res = await deleteUserService(userArr);
//       if (res && res.error === 0) {
//         toast.success("delete success ");
//         dispatch(deleteUserSuccess());
//         dispatch(fetchAllUserStart());
//     } else {
//       toast.error("delete Faild");
//       dispatch(deleteUserFaild());
//     }
//   } catch (e) {
//     dispatch(deleteUserFaild());
//   }
// };
// export const deleteUserSuccess = () => ({
//   type: actionTypes.DELETE_USER_SUCCESS,
// });
// export const deleteUserFaild = () => ({
//   type: actionTypes.DELETE_USER_FAILD,
// });
// //8. UPDATE USER
// export const updateUserStart = async (Data) => {
//   try {
//     dispatch({ type: actionTypes.UPDATE_USER_START });
//     let res = await updateUserService(Data);
//     console.log("res error ", res);
//     if (res && res.error == 0) {
//       toast.success("update success");
//       dispatch(updateUserSuccess());
//       dispatch(fetchAllUserStart());
//     } else {
//       toast.error("update faild ");
//        dispatch(updateUserFaild());
//        }

//   } catch (e) {
   
//     dispatch(updateUserFaild());
//   }

// };
// export const updateUserSuccess = () => ({
//   type: actionTypes.UPDATE_USER_SUCCESS,
// });
// export const updateUserFaild = () => ({
//   type: actionTypes.UPDATE_USER_FAILD,
// });
