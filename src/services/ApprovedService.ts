import {API_URL} from '../config/config';

const createApiUrl = (path: string): string => `${API_URL}${path}`;

export const getAllApproved = async () => {
    try {
        const response = await fetch(createApiUrl('applications/approved'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching applications:', error);
        throw error;
    }
};
