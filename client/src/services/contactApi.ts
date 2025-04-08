import { ContactFormData } from '../utils/formValidations';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/contact'
    : 'http://localhost:3001/api/contact';

export const submitContactForm = async (
  data: ContactFormData & {
    token: string;
  }
) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Handle specific HTTP status codes with user-friendly messages
    if (response.status === 429) {
      throw new Error(
        'You have sent too many messages. Please try again later.'
      );
    }

    if (response.status === 400) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Please check your submission details.'
      );
    }

    if (response.status === 403) {
      throw new Error('Access denied. Please refresh the page and try again.');
    }

    if (!response.ok) {
      throw new Error('Something went wrong. Please try again later.');
    }

    return await response.json();
  } catch (error) {
    // Re-throw network errors with a more user-friendly message
    if (error instanceof TypeError && error.message.includes('network')) {
      throw new Error(
        'Network error. Please check your connection and try again.'
      );
    }

    // Re-throw other errors
    throw error;
  }
};
