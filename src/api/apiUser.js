import axios from "../axios";
// const axios = require('axios').default;
//1.API FOR FORM LOGIN
let handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/v1/login", { email: userEmail, passWord: userPassword });
};

let handleLogoutApi = (userEmail, userPassword) => {
    return axios.post("/api/auth/logout", { email: userEmail, password: userPassword });
  };
//2. API FOR MANAGE USER

let getAlluser =async () => {
  return await axios.get(`/api/customers`);
};
let createNewUserService = (data) => {
  return axios.post('/api/v1/add_user', data);
};

// .delete('/api/v1/delete_user/:id'
let deleteUserService = (userId) => {
  return axios.delete(`/api/v1/delete_user/${userId}`, {
    id: userId,
  });
};
let updateUserService = (Data) => {
  console.log("axios : ",Data)
  return axios.put("/api/v1/update_user",Data,{
    headers: {
      'Content-Type': 'application/json'
    }
  } );
};
let handlePrisedent = () => {
  return axios.get("https://api-election.cbsnews.com/api/public/races2/2020/G?filter.officecode=P");
};



export {
  handleLoginApi,
  getAlluser,
  createNewUserService,
  deleteUserService,
  updateUserService,
  handleLogoutApi,
  handlePrisedent,
};