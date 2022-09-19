import axiosBase from 'axios';

const baseURL = 'http://localhost:5000/api/';

const axios = axiosBase.create({
  baseURL,
});

const api = {
  getAllPizzas: () => axios({
    url: 'admin/pizza',
    method: 'GET',
  })
}

export default api;