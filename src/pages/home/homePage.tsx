import styles from './homePage.module.css';
import {Button} from '@gravity-ui/uikit';

export const HomePage: React.FC = () => {
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
                        <Button view="action" size="xl" pin="round-round" width="max">
                            Витрина проектов
                        </Button>
                        <Button view="action" size="xl" pin="round-round" width="max">
                            Проектная заявка
                        </Button>
                    </div>
                </div>
            </header>
            <main>{/* Additional content here */}</main>
        </>
    );
};
