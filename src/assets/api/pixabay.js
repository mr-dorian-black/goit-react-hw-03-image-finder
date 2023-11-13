import axios from 'axios';

const key = '38484298-a4f98b849ca0293483b2c27a9';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const findImages = async (query, page) => {
  const params = new URLSearchParams({
    key: key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });

  const response = await axios.get(`/?${params.toString()}`);
  return response.data;
};
