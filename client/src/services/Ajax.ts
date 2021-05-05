import axios from 'axios';

class Ajax {
  static async get(endpoint: string) {
    const { data } = await axios.get(`${process.env.REACT_APP_API}${endpoint}`);
    // console.log('get all data-->', data);
    return data;
  }

  static async post(endpoint: string, object: never) {
    const { data } = await axios.post(`${process.env.REACT_APP_API}${endpoint}`, object, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `${localStorage.getItem('token')}`
      },
    });
    // console.log('post new data-->', data);
    return data;
  }
}

export default Ajax;
