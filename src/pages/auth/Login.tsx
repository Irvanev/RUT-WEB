import {useState} from 'react';
import {Button, Card, Container, TextInput} from '@gravity-ui/uikit';
import styles from './login.module.css';

import {useAuth} from '../../context/AuthContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const envUsername = process.env.REACT_APP_USERNAME;
        const envPassword = process.env.REACT_APP_PASSWORD;
        if (username === envUsername && password === envPassword) {
            login(username, password);
            // window.location.href = '/admin';
        } else {
            setError('Неверное имя пользователя или пароль');
        }
    };

    return (
        <Container className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Card className={styles.card}>
                    <TextInput
                        size="xl"
                        type="text"
                        name="username"
                        placeholder="Логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        validationState={error ? 'invalid' : undefined}
                    />
                    <TextInput
                        size="xl"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        validationState={error ? 'invalid' : undefined}
                    />
                    {error && <div className={styles.error}>{error}</div>}
                    <Button view="action" size="xl" type="submit">
                        Войти
                    </Button>
                </Card>
            </form>
        </Container>
    );
};

export default LoginPage;
