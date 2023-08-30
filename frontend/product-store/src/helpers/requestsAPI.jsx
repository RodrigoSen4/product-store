import axios from 'axios';

const host = 'localhost';
const port = '3001';

const conn = `http://${host}:${port}`;

const service = axios.create({ baseURL: conn });

const getAll = async () => {
  const response = await service.get('/items');
  console.log(response.data);
  return response.data;
};

export {
  getAll,
};
