import axios from "axios";

const kenzieHubApi = axios.create({

  baseURL: 'https://kenziehub.herokuapp.com/',
  timeout: 5000,

});

export default kenzieHubApi;