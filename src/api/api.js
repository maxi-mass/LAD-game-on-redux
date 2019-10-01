import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
});

export const serverAPI = {
    getData: () => {
        return axiosInstance
            .get('/data')
            .then(response => response.data);
    },
    /*
    play: ({columnIndex, currentPlayer}) => {
        return axiosInstance
            .post('/play', {columnIndex, currentPlayer})
            .then(response => response.data);
    }
    */
    play: ({columnIndex, currentPlayer}) => {
        return axios
            .post('http://localhost:4000/play', {columnIndex, currentPlayer})
            .then(response => response.data);
    }
};