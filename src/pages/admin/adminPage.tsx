import React from 'react';
import styles from './adminPage.module.css';
import {Card, Container, Table, Tabs, withTableActions} from '@gravity-ui/uikit';

export const AdminPage: React.FC = () => {
    const MyTable = withTableActions(Table);
    const data = [
        {
            title: 'Протез+',
            text: 'Увеличить уровень мобильности граждан со степенью ампутации ниже локтя',
        },
        {title: 'ПроНормоконтроль', text: 'Hello'},
    ];
    const columns = [{id: 'title'}, {id: 'text'}];
    const getRowActions = () => {
        return [
            {
                text: 'Print',
                handler: () => {},
            },
            {
                text: 'Remove',
                handler: () => {},
            },
        ];
    };

    return (
        <Container className={styles.container} maxWidth="l">
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
                <Card className={styles.rightCard}>Right Card</Card>
            </div>
        </Container>
    );
};
