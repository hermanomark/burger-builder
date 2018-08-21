import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-hermanomark.firebaseio.com/'
});

export default instance;
