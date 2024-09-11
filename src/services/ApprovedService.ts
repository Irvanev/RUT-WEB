import {API_URL} from '../config/config';

const createApiUrl = (path: string): string => `${API_URL}${path}`;

export const getAllApproved = async () => {
    try {
        // Отправка GET-запроса на сервер
        const response = await fetch(createApiUrl('applications/approved'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Response status:', response.status); // Логируем статус ответа

        // Проверка на успешность ответа
        if (!response.ok) {
            const errorText = await response.text(); // Получаем текст ошибки с сервера
            console.error('Error response:', errorText); // Логируем ошибку
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        // Преобразование ответа в JSON
        const data = await response.json();
        console.log('Fetched data:', data); // Логируем полученные данные
        return data;
    } catch (error) {
        // Обработка ошибок
        console.error('Error fetching applications:', error);
        throw error;
    }
};
