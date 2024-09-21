import styles from './homePage.module.css';
import {Button, Card, Container, Loader, Table} from '@gravity-ui/uikit';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.png';
import flagstripe from '../../assets/logo_flagstripe_mini.png';
import about from '../../assets/about.png';
import advantages1 from '../../assets/advantages1.png';
import advantages2 from '../../assets/advantages2.png';
import advantages3 from '../../assets/advantages3.png';
import {useEffect, useState} from 'react';
import {getAllApproved} from '../../services/ApprovedService';

export const HomePage: React.FC = () => {
    interface Project {
        ProjectName: string;
        ProjectGoal: string;
        ProblemHolder: string;
        ProjectDuration: string;
        ProjectLevel: string;
        Barrier: string;
        ExistingSolutions: string;
        Keywords: string;
    }

    const MyTable = Table;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const columns = [
        {id: 'ProjectName', name: 'Название проекта'},
        {id: 'ProjectGoal', name: 'Цель проекта'},
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllApproved();
                const applications = response.applications;
                setData(applications);
            } catch (err) {
                setError(error);
                console.error('Ошибка при получении заявок:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
                            Принять участие
                        </Button>
                    </div>
                </div>
            </header>
            <main>
                <h2>О проектной деятельности в ИУЦТ</h2>
                <div className={styles.about}>
                    <div className={styles.image}>
                        <img src={about} alt="About" />
                    </div>
                    <div className={styles.text}>
                        <p>
                            С 2021 года в Российском университете транспорта во все учебные планы
                            специалитета и бакалавриата внедрена новая дисциплина - «Проектная
                            деятельность» Данная образовательная модель позволяет студенту
                            критически, логически и аналитически мыслить, выявлять и решать
                            проблемные задачи, обобщать и выделять главное.
                            <br />
                            <br />
                            Студенты ИУЦТ РУТ(МИИТ) приобретают важные навыки командной работы и
                            деловой коммуникации. Изучают пользователя и индустрию через
                            проектирование и апробирование принципиально нового решения, которое
                            позволяет получить навыки эффективного взаимодействовать с коллегами и
                            партнерами, почувствовать ценность проектного подхода.
                            <br />
                            <br />
                            Идеи для проектов может предложить любая внешняя организация, а также
                            любой студент или сотрудник РУТ (МИИТ).
                        </p>
                    </div>
                </div>
                <h2>Приемущества проектной деятельности</h2>
                <div className={styles.advantages}>
                    <p>
                        Большим преимуществом проектной деятельности является междисциплинарность,
                        позволяющая студентам объединятся из разных направлений и обмениваться
                        взглядами и подходами из разных сфер и областей для решения общей задачи.
                        <br />
                        <br />
                        Ежегодно в проектной деятельности принимают участие студенты всех
                        направлений и специальностей института с 1 по 4 курс.
                    </p>
                    <div className={styles.advantagesImages}>
                        <div className={styles.imageContainer}>
                            <img src={advantages1} alt="Image 1" />
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={advantages2} alt="Image 2" />
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={advantages3} alt="Image 3" />
                        </div>
                    </div>
                    <div className={styles.advantagesWrapper}>
                        <div className={styles.advantagesItem}>
                            <p>Преимущества сотрудничества для предприятий-партнеров:</p>
                            <ul>
                                <li>
                                    Использование научного потенциала Университета для повышения
                                    эффективности бизнеса компании;
                                </li>
                                <li>Новый и оригинальный взгляд на поставленные задачи;</li>
                                <li>Возможность отбора перспективных выпускников;</li>
                                <li>
                                    Возможность подготовить специалистов именно для своего
                                    предприятия, с учетом специфики деятельности;
                                </li>
                                <li>
                                    Создание кадрового резерва предприятия, решение вопросов,
                                    связанных с дефицитом квалифицированных кадров.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.advantagesItem}>
                            <p>Преимущества для студентов:</p>
                            <ul>
                                <li>Реализация проектов по реальным заказам бизнеса.</li>
                                <li>
                                    Возможность проработки бизнес-идей для отраслевых заказчиков.
                                </li>
                                <li>Освоение инструментария проектной работы.</li>
                                <li>Развитие полезных практических навыков и компетенций:</li>
                                <ul>
                                    <li>Командная работа</li>
                                    <li>Критическое и системное мышление</li>
                                    <li>
                                        Умение анализировать и использовать разного рода информацию
                                    </li>
                                    <li>Выстраивание коммуникаций и деловых отношений</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 id="project-showcase">ВИТРИНА ПРОЕКТОВ</h2>
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
                            ) : !data || data.length === 0 ? (
                                <div className={styles.errorMessageContainer}>
                                    <h2>Нет данных для отображения</h2>
                                </div>
                            ) : (
                                <MyTable
                                    data={data}
                                    className={styles.shit_table}
                                    columns={columns}
                                    wordWrap={true}
                                    onRowClick={(row: Project) => setSelectedProject(row)}
                                />
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
            </main>
            <footer>
                <div className={styles.footerCenter}>
                    <img className={styles.footerImageLogo} src={logo} alt="Logo IUDT" />
                    <div className={styles.footerText}>
                        <p>© 2024 ИУЦТ</p>
                    </div>
                    <img className={styles.footerImage} src={flagstripe} alt="Logo Flagstripe" />
                </div>
            </footer>
        </>
    );
};
