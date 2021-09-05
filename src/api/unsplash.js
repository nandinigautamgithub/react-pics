import axios from 'axios';

export default axios.create({
  headers: {
    baseURL: ' https://api.unsplash.com ' , 
    Authorization:
      'Client-ID 34e39e5c2f447ce52009a515846ca2b6ccc355552bb63de59cf4a6d06728f3f7e'
  }
});
