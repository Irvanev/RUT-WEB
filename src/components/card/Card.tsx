import {Card, Text as CustomText} from '@gravity-ui/uikit';
import React, {FC} from 'react';
import styles from './card.module.css';

interface FormCardProps {
    title: string;
    children: React.ReactNode;
}

const FormCard: FC<FormCardProps> = ({title, children}) => {
    return (
        <Card className={styles.card}>
            <CustomText variant="header-1">{title}</CustomText>
            {children}
        </Card>
    );
};

export default FormCard;
