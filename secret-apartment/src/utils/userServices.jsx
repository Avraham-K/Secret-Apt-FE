import axios from "axios";
import { errorNotice, successNotice } from "./notifications";

const BASE_URL = "http://localhost:3000/";


export const postNewUser = async (userObj) => {
  try {
    const resp = await axios.post(`${BASE_URL}/users/signup`, userObj);
    console.log(resp.data);
    return resp.data;
  } catch (err) {
    console.log(err);
    errorNotice(err.response.data);
  }
};


export const getLoggedInUser = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/users/validate`);
    console.log(resp.data);
    return resp.data;
  } catch (err) {
    console.log(err);
    successNotice("Sign in or create an account to enjoy our full service!");
  }
};


export const updatePassword = async (userObj) => {
  try {
    const resp = await axios.put(`${BASE_URL}/users/password-update`, userObj);
    return resp.data;
  } catch (err) {
    console.log(err);
    errorNotice(err.response.data);
  }
};

export const updateEmail = async (userObj) => {
  try {
    const resp = await axios.put(`${BASE_URL}/users/email-address-update`, userObj, {withCredentials: true});
    return resp.data;
  } catch (err) {
    console.log(err);
    errorNotice(err.response.data);
  }
};

export const getAllUsers = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/users/search`, {withCredentials: true});
    return resp.data;
  } catch (err) {
    console.error(err);
    errorNotice(err.response.data);
  }
};

export const toggleSaved = async (petId, userId, toggle) => {
  const savedToggle = { "toggle": toggle, "petId": petId };
  console.log(savedToggle)
  try {
    const resp = await axios.post(`${BASE_URL}/users/${userId}/saved_pet`, savedToggle);
    return resp.data;
  } catch (err) {
    console.error(err);
    errorNotice(err.response.data);
  }
}

export const getUserByEmail = async (email) => {
  try {
    const resp = await axios.get(`${BASE_URL}/users/${email}/admin/emailsearch`, {withCredentials: true});
    return resp.data;
  } catch (err) {
    console.error(err);
    errorNotice(err.response.data);
  }
}

export const createAdmin = async (userObj) => {
  try {
    const resp = await axios.put(`${BASE_URL}/users/admin/new`, userObj, {withCredentials: true});
    return resp.data;
  } catch (err) {
    console.log(err);
    errorNotice(err.response.data);
  }
};