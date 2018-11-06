import axios from 'axios';
const URL = `https://jsonplaceholder.typicode.com`;
const FIREBASEDB = `https://proyecto-92f5c.firebaseio.com`;

export function getArticles() {
    const request = axios.get(`${URL}/posts`)
        .then(response => response.data);
    return {
        //Type is the id and payload is all the data
        type: 'GET_ARTICLES', //see articleReducer
        payload: request

    }
}

export function addPost(post){
    const request = axios({
        method:"POST",
        url:`${FIREBASEDB}/client.json`,
        data:post
    }).then( response => response.data)

    return {
        type:'ADD_POST',
        payload:request
    }
}
