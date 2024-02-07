// redux/actions.js
import axios from 'axios';

export const sendFormData = (formData) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/data', formData);
      // Dispatch a success action if needed
    } catch (error) {
      console.error('Error sending form data:', error);
      // Dispatch an error action if needed
    }
  };
};
