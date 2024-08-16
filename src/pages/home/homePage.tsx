import styles from './homePage.module.css';
import {Button} from '@gravity-ui/uikit';

/*
import { Col, Container, Row } from '@gravity-ui/uikit';
*/

export const HomePage: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerText}>
                    <h1>
                        Проектная деятельность ИУЦТ! <br /> Что это?
                    </h1>{' '}
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
            <main>
                {/*                <Container maxWidth="l" className={styles.container}>
                    <h5 className={styles.title}>О проектной деятельности в ИУЦТ</h5>
                    <Row
                        space={{
                            s: 1,
                            m: '5',
                        }}
                        spaceRow={{
                            s: 5,
                            m: '1',
                        }}
                    >
                        <Col s="12" m="6" l="2" xl="3">
                            <span>jbrfed</span>
                        </Col>
                        <Col s="12" m="6" l="2" xl="3">
                            <span>jbrfed</span>
                        </Col>
                        <Col s="6" m="12" xl="3">
                            <span>jbrfed</span>
                        </Col>
                        <Col s="6" m="12" xl="3">
                            <span>jbrfed</span>
                        </Col>
                    </Row>
                </Container>*/}
            </main>
        </>
    );
};
