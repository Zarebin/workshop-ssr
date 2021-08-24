import axios from 'axios';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res;
}
