import axios from 'axios';
const URL = `https://jsonplaceholder.typicode.com`;

export function getArticles() {
    const request = axios.get(`${URL}/post`)
        .then(response => response.data);
    return {
        //Type is the id and payload is all the data
        type: 'GET_ARTICLES', //see articleReducer
        payload: request

    }
}