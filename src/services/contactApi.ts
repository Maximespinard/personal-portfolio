import { ContactFormData } from '../utils/formValidations';

// Mock API for development
export const submitContactForm = async (
  data: ContactFormData & {
    token: string;
    submissionTime: number;
  }
) => {
  // Simulated API call
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('Mock form submission:', data);
      resolve();
    }, 1500);
  });
};

// Uncomment and modify when backend is ready
// export const submitContactForm = async (data: ContactFormData & {
//   token: string,
//   submissionTime: number
// }) => {
//   const response = await fetch('http://localhost:5000/api/contact', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error('Submission failed');
//   }

//   return response.json();
// };
