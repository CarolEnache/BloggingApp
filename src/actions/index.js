import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'hhtp://reduxblog.herokuapp.com/api';
const API_KEY = '?key=somethingrandomandunic';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return{
        type: FETCH_POSTS,
        payload: request

    };
}