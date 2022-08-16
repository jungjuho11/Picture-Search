import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID IIjYnqgeHr_Y4r0KKL_DVve8MqTZ5dT4jFAMCNbDFK8"
      }
});
