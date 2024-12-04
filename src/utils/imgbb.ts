import axios from 'axios';

const API_KEY = 'efa1fd5deadf894d322be9258365e591';
const API_URL = 'https://api.imgbb.com/1/upload';

export const uploadImage = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(`${API_URL}?key=${API_KEY}`, formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to upload image');
  }
};