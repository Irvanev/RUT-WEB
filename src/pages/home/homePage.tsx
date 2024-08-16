import styles from './homePage.module.css';
import {Button} from '@gravity-ui/uikit';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.png';
import flagstripe from '../../assets/logo_flagstripe_mini.png';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerText}>
                    <h1>
                        Проектная деятельность ИУЦТ! <br /> Что это?
                    </h1>
                    <p>
                        Проектная деятельность ИУЦТ - это вовлечение студентов в работу по решению
                        практических и исследовательских задач, как в университете, так и за его
                        пределами. Проектная деятельность является одной из форм осуществления
                        учебного процесса.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Button
                            view="action"
                            size="xl"
                            pin="round-round"
                            width="max"
                            onClick={() =>
                                document.getElementById('project-showcase')?.scrollIntoView()
                            }
                        >
                            Витрина проектов
                        </Button>
                        <Button
                            view="action"
                            size="xl"
                            pin="round-round"
                            width="max"
                            onClick={() => navigate('/add')}
                        >
                            Проектная заявка
                        </Button>
                    </div>
                </div>
            </header>
            <main>
                <h2>О проектной деятельности в ИУЦТ</h2>
                <h2>Приемущества проектной деятельности</h2>
                <h2 id="project-showcase">ВИТРИНА ПРОЕКТОВ</h2>{' '}
            </main>
            <footer>
                <div className={styles.footerCenter}>
                    <img className={styles.footerImageLogo} src={logo} alt="Logo IMDT" />
                    <div className={styles.footerText}>
                        <p>© 2024 ИУЦТ</p>
                    </div>
                    <img className={styles.footerImage} src={flagstripe} alt="Logo Flagstripe" />
                </div>
            </footer>
        </>
    );
};
