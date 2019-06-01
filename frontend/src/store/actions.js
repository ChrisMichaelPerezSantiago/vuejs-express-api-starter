import axios from 'axios';

const BASE_API_URL= 'http://localhost:8081/api/v1/';
const API_URL_ENDPOINT = 'users'

const A = axios.create({ baseURL: String(BASE_API_URL) });

export const actions = {
  GET_DATA({commit}){
    A.get(API_URL_ENDPOINT).then((res) =>{      
      commit('SET_DATA' , res.data.users);
      commit('IS_LOADING' , false);
    }).catch((err) =>{
      console.error(err)
    });
  }
};