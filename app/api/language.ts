import axiosInstance from '../lib/axios';

// Function to fetch language data
export const fetchLanguages = async (language: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/pages?lang=${language}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch language');
  }
};