import React from 'react';
import styles from './navbar.module.css';
import {Container} from '@gravity-ui/uikit';
import {useAuth} from '../../context/AuthContext';

const Navbar: React.FC = () => {
    const {logout} = useAuth();
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <a href="/">Главная</a>
                    </li>
                    <div className={styles.navbarRight}>
                        <li className={styles.navbarItem}>
                            <a onClick={logout} href="#">
                                Выйти
                            </a>
                        </li>
                    </div>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar;
