import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const searchByNeighborhood = async (Neighborhood) => {
    console.log(Neighborhood)
    try {
        const resp = await axios.get(`${BASE_URL}/Listing?Neighborhood=${Neighborhood}`)
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.log(err);
        console.log(err.message);
    }
};

export const getSpecificApartments = async (searchObj) => {
    try {
        const resp = await axios.post(`${BASE_URL}/Listing/advanced`, searchObj);
        console.log(resp.data);
        return resp.data;
    } catch (err) {
        console.log(err);
        console.log(err.message);
    }
};

// export const updateEmail = async (userObj) => {
//     try {
//         const resp = await axios.put(`${BASE_URL}/users/email-address-update`, userObj);
//         return resp.data;
//     } catch (err) {
//         console.log(err);
//         errorNotice(err.response.data);
//     }
// };
