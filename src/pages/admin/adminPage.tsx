import React, {useEffect, useState} from 'react';
import styles from './adminPage.module.css';
import {Card, Container, Table, Tabs, withTableActions} from '@gravity-ui/uikit';
import {getAllApplications} from '../../services/AdminService';

export const AdminPage: React.FC = () => {
    const MyTable = withTableActions(Table);
    // const data = [
    //     {
    //         id: 1,
    //         applicant_name: 'Иван',
    //         applicant_email: 'simple@gmail.com',
    //         applicant_phone: '79167158394',
    //         position_and_organization: 'none',
    //         project_duration: '2 sem',
    //         project_level: 'hight',
    //         problem_holder: 'Люди с уровнем ампутации ниже локтя',
    //         project_goal: 'Увеличить уровень мобильности граждан со степенью ампутации ниже локтяe',
    //         barrier:
    //             'Существующие насадки для рабочих протезов имеют узкую специализацию и предназначены для выполнения одной производственной или бытовой задачи. Это приводит к тому, что человек вынужден иметь широкий ассортимент насадок для рабочего протеза, что снижает удобство при эксплуатации и увеличивает финансовые затраты на приобретение определенных насадок',
    //         existing_solutions: 'Множество вариантов сменных насадок для рабочих протезов',
    //         keywords: 'kill',
    //         interested_parties: 'all',
    //         consultants: 'DNS',
    //         additional_materials: '',
    //         project_name: '',
    //     },
    // ];
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
    const [error, setError] = useState(null); // Состояние для ошибок
    useEffect(() => {
        const fetchData = async () => {
            try {
                const applications = await getAllApplications(); // Получаем данные с сервера
                setData(applications); // Обновляем состояние данными
            } catch (err) {
                setError(error);
                console.error('Ошибка при получении заявок:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const columns = [
        {id: 'applicant_name', header: 'Имя заявителя'},
        {id: 'project_goal', header: 'Цель проекта'},
    ];

    const handleDelete = () => {
        console.log('Delete clicked for:');
    };

    const handleEdit = () => {};

    const getRowActions = () => {
        return [
            {
                text: 'Удалить',
                handler: () => handleDelete(),
            },
            {
                text: 'Редактировать',
                handler: () => handleEdit(),
            },
        ];
    };

    // Отображение в зависимости от состояния загрузки или ошибок
    if (loading) {
        return <div>Загрузка данных...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <Container className={styles.container} maxWidth="xl">
            <div className={styles.cardContainer}>
                <Card className={styles.leftCard}>
                    <Tabs
                        activeTab="all_projects"
                        items={[
                            {id: 'all_projects', title: 'Все проекты'},
                            {id: 'applications', title: 'Заявки'},
                        ]}
                    />
                    <MyTable
                        className={styles.table}
                        data={data}
                        columns={columns}
                        getRowActions={getRowActions}
                    />
                </Card>
                <Card className={styles.rightCard}>
                    <Tabs
                        activeTab="data_projects"
                        items={[
                            {id: 'all_projects', title: 'Все проекты'},
                            {id: 'applications', title: 'Заявки'},
                        ]}
                    />
                    <MyTable
                        className={styles.table}
                        data={data}
                        columns={columns}
                        getRowActions={getRowActions}
                    />
                </Card>
            </div>
        </Container>
    );
};
