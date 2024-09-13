import {API_URL} from '../config/config';

const createApiUrl = (path) => `${API_URL}${path}`;

export const getAllApplications = async (auth) => {
    try {
        const response = await fetch(createApiUrl('admin/applications'), {
            method: 'GET',
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching applications:', error);
        throw error;
    }
};

export const approveApplication = async (auth, applicationId) => {
    try {
        const response = await fetch(createApiUrl(`admin/applications/${applicationId}`), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${auth}`,
            },
            body: JSON.stringify({status: 'Допущена'}),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Application approved:', data);
        return data;
    } catch (error) {
        console.error('Error approving application:', error);
        throw error;
    }
};

export const deleteApplication = async (auth, applicationId) => {
    try {
        const response = await fetch(createApiUrl(`admin/applications/${applicationId}`), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${auth}`,
            },
            body: JSON.stringify({status: 'Удалена'}),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Application deleted:', data);
        return data;
    } catch (error) {
        console.error('Error deleting application:', error);
        throw error;
    }
};
