import bodyImage from '../../assets/body.png';

import styles from './homePage.module.css';
import {Col, Container, Row} from '@gravity-ui/uikit';

export const HomePage: React.FC = () => {
    return (
        <>
            <header>
                <img className={styles.bodyImage} src={bodyImage}></img>
            </header>

            <main>
                <Container maxWidth="l" className={styles.container}>
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
                </Container>
            </main>
        </>
    );
};
