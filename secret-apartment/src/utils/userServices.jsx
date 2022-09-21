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

export const updateEmail = async (userObj) => {
    try {
        const resp = await axios.put(`${BASE_URL}/users/email-address-update`, userObj);
        return resp.data;
    } catch (err) {
        console.log(err);
        errorNotice(err.response.data);
    }
};
