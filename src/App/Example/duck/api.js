import axios from 'axios';

const API_EXAMPLE = '/talleres/';

const fetchDataExample = () => {
    const url = `${API_EXAMPLE}`;
    return axios.get(url);
};

export default {
    fetchDataExample
};
