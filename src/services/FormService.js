import {API_URL} from '../config/config';

const createApiUrl = (path) => `${API_URL}${path}`;

export const sendFormData = async (formData) => {
    try {
        const response = await fetch(createApiUrl('applications'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending form data:', error);
        throw error;
    }
};
