import axios from "axios";

export const URL = "https://api.thecatapi.com/v1/breeds";

const getCats = () => {
    let data = [];
    axios
    .get(URL)
    .then((response) => {
        data = response.data;
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        return {
            data: data
        }
    })
}

export default getCats;