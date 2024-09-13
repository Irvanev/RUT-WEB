import React, {useEffect, useState} from 'react';
import styles from './adminPage.module.css';
import {Button, Card, Container, Loader, Table, Tabs, useToaster} from '@gravity-ui/uikit';
import {
    approveApplication,
    deleteApplication,
    getAllApplications,
} from '../../services/AdminService';

import {useAuth} from '../../context/AuthContext';
import {Project} from '../../types/fetchingTypes';
import Navbar from '../../components/navbar/Navbar';

export const AdminPage: React.FC = () => {
    const MyTable = Table;
    const {auth} = useAuth();
    const [data, setData] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [refresh, setRefresh] = useState(false);
    const {add} = useToaster();

    const columns = [
        {id: 'ProjectName', name: 'Название проекта'},
        {id: 'ProjectGoal', name: 'Цель проекта'},
        {id: 'Status', name: 'Статус'},
    ];

    const [activeTab, setActiveTab] = useState('На рассмотрении');

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setSelectedProject(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllApplications(auth);
                const applications = response.applications;
                setData(applications);
            } catch (err) {
                const error = err as Error;
                setError(error);
                console.error('Ошибка при получении заявок:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [refresh]);

    const showToast = (message: string, type: 'success' | 'error') => {
        add({
            title: message,
            type,
            name: type === 'success' ? 'SuccessToast' : 'ErrorToast',
        });
    };

    const handleApprove = async (projectId: number) => {
        try {
            await approveApplication(auth, projectId);
            showToast('Проект успешно одобрен!', 'success');
        } catch (error) {
            showToast('Ошибка при одобрении проекта.', 'error');
        } finally {
            setRefresh(!refresh);
            setSelectedProject(null);
        }
    };

    const handleDelete = async (projectId: number) => {
        try {
            await deleteApplication(auth, projectId);
            showToast('Проект успешно удален!', 'success');
        } catch (error) {
            showToast('Ошибка при удалении проекта.', 'error');
        } finally {
            setRefresh(!refresh);
            setSelectedProject(null);
        }
    };

    return (
        <>
            <Navbar />
            <Container className={styles.container} maxWidth="xl">
                <div className={styles.cardContainer}>
                    <Card className={styles.leftCard}>
                        {error ? (
                            <div className={styles.errorMessageContainer}>
                                <h2>Ошибка загрузки данных</h2>
                                <p>{error.message}</p>
                            </div>
                        ) : loading ? (
                            <div className={styles.loaderContainer}>
                                <Loader />
                            </div>
                        ) : (
                            <>
                                <Tabs
                                    activeTab={activeTab}
                                    items={[
                                        {id: 'На рассмотрении', title: 'На рассмотрении'},
                                        {id: 'Допущена', title: 'Допущено'},
                                        {id: 'Удалена', title: 'Удалено'},
                                    ]}
                                    onSelectTab={handleTabChange}
                                />
                                {activeTab === 'На рассмотрении' && (
                                    <MyTable
                                        data={data.filter(
                                            (item) => item.Status === 'На рассмотрении',
                                        )}
                                        className={styles.shit_table}
                                        columns={columns}
                                        wordWrap={true}
                                        onRowClick={(row: Project) => setSelectedProject(row)}
                                    />
                                )}
                                {activeTab === 'Допущена' && (
                                    <MyTable
                                        data={data.filter((item) => item.Status === 'Допущена')}
                                        className={styles.shit_table}
                                        columns={columns}
                                        wordWrap={true}
                                        onRowClick={(row: Project) => setSelectedProject(row)}
                                    />
                                )}
                                {activeTab === 'Удалена' && (
                                    <MyTable
                                        data={data.filter((item) => item.Status === 'Удалена')}
                                        className={styles.shit_table}
                                        columns={columns}
                                        wordWrap={true}
                                        onRowClick={(row: Project) => setSelectedProject(row)}
                                    />
                                )}
                            </>
                        )}
                    </Card>
                    <Card className={styles.leftCard}>
                        {selectedProject ? (
                            <div>
                                <h1 className={styles.detailsHeader}>
                                    {selectedProject.ProjectName}
                                </h1>
                                <div className={styles.details}>
                                    <div className={styles.detailsRow}>
                                        <strong>Цель проекта:</strong>
                                        <p>{selectedProject.ProjectGoal}</p>
                                    </div>
                                    <div className={styles.detailsRow}>
                                        <strong>Заказчик:</strong>
                                        <p>{selectedProject.ProblemHolder}</p>
                                    </div>
                                    <div className={styles.detailsRow}>
                                        <strong>Барьер проекта:</strong>
                                        <p>{selectedProject.Barrier}</p>
                                    </div>
                                    <div className={styles.detailsRow}>
                                        <strong>Срок:</strong>
                                        <p>{selectedProject.ProjectDuration}</p>
                                    </div>
                                    <div className={styles.detailsRow}>
                                        <strong>Существущие решения:</strong>
                                        <p>{selectedProject.ExistingSolutions}</p>
                                    </div>
                                    <div className={styles.detailsRow}>
                                        <strong>Ключевые слова:</strong>
                                        <p>{selectedProject.Keywords}</p>
                                    </div>
                                    <div className={styles.detailsRow}>
                                        <strong>Уровень проекта:</strong>
                                        <p>{selectedProject.ProjectLevel}</p>
                                    </div>
                                    <div className={styles.buttons}>
                                        <Button
                                            view="action"
                                            className={styles.regButton}
                                            onClick={() => handleApprove(selectedProject.ID)}
                                            disabled={!(selectedProject.Status === 'Удалена')}
                                        >
                                            Одобрить
                                        </Button>
                                        <Button
                                            view="outlined-danger"
                                            className={styles.regButton}
                                            onClick={() => handleDelete(selectedProject.ID)}
                                            disabled={!(selectedProject.Status === 'Допущена')}
                                        >
                                            Удалить
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : loading ? (
                            <div className={styles.loaderContainer}>
                                <Loader />
                            </div>
                        ) : error ? (
                            <div className={styles.errorMessageContainer}>
                                <h2>Ошибка загрузки данных</h2>
                                <p>{error.message}</p>
                            </div>
                        ) : (
                            <div className={styles.loaderContainer}>
                                <p>Выберите проект для отображения деталей.</p>
                            </div>
                        )}
                    </Card>
                </div>
            </Container>
        </>
    );
};
