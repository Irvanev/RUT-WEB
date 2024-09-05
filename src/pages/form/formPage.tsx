import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {ProjectData, ProjectDuration, ProjectLevel} from '../../types/fetchingTypes';
import {sendFormData} from '../../services/FormService';

import {Button, Card, Container, Text as CustomText, Loader, Modal} from '@gravity-ui/uikit';

import styles from './formPage.module.css';
import FormCard from '../../components/card/Card';
import FormInput from '../../components/input/Input';
import FormTextArea from '../../components/text-area/TextArea';
import FormRadio from '../../components/radio/Radio';

export const FormPage: React.FC = () => {
    const [formData, setFormData] = useState<ProjectData>({
        applicant_name: '',
        applicant_email: '',
        applicant_phone: '',
        position_and_organization: '',
        project_duration: ProjectDuration.TwoSemesters,
        project_level: ProjectLevel.Diagnostic,
        problem_holder: '',
        project_goal: '',
        barrier: '',
        existing_solutions: '',
        keywords: '',
        interested_parties: '',
        consultants: '',
        additional_materials: '',
        project_name: '',
    });

    const [isValid, setIsValid] = useState({
        applicant_name: true,
        applicant_email: true,
        applicant_phone: true,
        position_and_organization: true,
        project_duration: true,
        project_level: true,
        problem_holder: true,
        project_goal: true,
        barrier: true,
        existing_solutions: true,
        keywords: true,
        interested_parties: true,
        consultants: true,
        additional_materials: true,
        project_name: true,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (name: keyof ProjectData, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const setProjectDuration = (value: ProjectDuration) => {
        setFormData((prevState) => ({
            ...prevState,
            project_duration: value,
        }));
    };

    const setProjectLevel = (value: ProjectLevel) => {
        setFormData((prevState) => ({
            ...prevState,
            project_level: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const newIsValid = {...isValid};
        let allValid = true;

        Object.keys(formData).forEach((key) => {
            const field = key as keyof ProjectData;
            newIsValid[field] = !!formData[field];
            if (!formData[field]) {
                allValid = false;
            }
        });

        setIsValid(newIsValid);

        if (allValid) {
            try {
                console.log('Sending form data:', formData);
                const response = await sendFormData(formData);
                console.log('Server response:', response);
                setModalIsOpen(true);
            } catch (error) {
                console.error('Failed to send form data:', error);
            }
        }

        setIsLoading(false);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        navigate('/');
    };

    return (
        <Container className={styles.container}>
            <h1 className={styles.pageTitle}>Форма проектной заявки</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Card className={styles.card}>
                    <CustomText variant="body-3">
                        Уважаемые эксперты, наставники и студенты!<br></br>Данная форма
                        предназначена для правильного заполнения и сбора проектных заявок в рамках
                        дисциплины "Проектная деятельность" на 1 семестр учебного 2024-25 года в
                        ИУЦТ - РУТ (МИИТ).<br></br>Если во время заполнения проектной заявки
                        возникли вопросы просим Вас связаться с ответственным от ИУЦТ за связь с
                        производством - Яневым Живко (ауд. 1547).
                    </CustomText>
                </Card>
                <FormCard title="1. Ф.И.О. (полностью) заполняющего проектную заявку:">
                    <FormInput
                        name="name"
                        type="text"
                        value={formData.applicant_name}
                        setValue={(value) => handleInputChange('applicant_name', value)}
                        isValid={isValid.applicant_name}
                        placeholder="Александров Александр Александрович"
                    />
                </FormCard>
                <FormCard title="2. Электронная почта и контактный номер заполняющего проектную заявку:">
                    <FormInput
                        name="email"
                        type="email"
                        value={formData.applicant_email}
                        setValue={(value) => handleInputChange('applicant_email', value)}
                        isValid={isValid.applicant_email}
                        placeholder="pdrutmiit@yandex.ru"
                    />
                </FormCard>
                <FormCard title="3. Контактный номер заполняющего проектную заявку:">
                    <FormInput
                        name="phone"
                        type="tel"
                        value={formData.applicant_phone}
                        setValue={(value) => handleInputChange('applicant_phone', value)}
                        isValid={isValid.applicant_phone}
                        placeholder="+7(999)111-11-11"
                    />
                </FormCard>
                <FormCard title="4. Должность, подразделение и наименование организации заполняющего проектную заявку:">
                    <CustomText variant="body-3">
                        Для представителей ИУЦТ и РУТ (МИИТ) - доцент, кафедра "ЖДСТУ", ФГАОУ ВО
                        (РУТ (МИИТ))
                        <br></br>Для представителей производства - ведущий технолог, центр
                        экспертизы проектов, ОАО "РЖД"
                    </CustomText>
                    <FormTextArea
                        name="position"
                        value={formData.position_and_organization}
                        setValue={(value) => handleInputChange('position_and_organization', value)}
                        isValid={isValid.position_and_organization}
                        placeholder={`Пример: Доцент, кафедра "ЖДСТУ", ФГАОУ ВО (РУТ (МИИТ))`}
                    />
                </FormCard>
                <FormCard title="5. Выберите предполагаемую продолжительность реализации проектной заявки:">
                    <CustomText variant="body-3">
                        Если учебная группа согласно плану реализации кафедральной нагрузки
                        закреплена за вами на семестр, то следует выбрать "1 семестр"<br></br>Если
                        учебная группа согласно плану реализации кафедральной нагрузки закреплена за
                        вами больше чем на 1 семестр, после консультации с ответственным за связь с
                        производством, примите решение о сроке реализации и выберите вариант ответа
                        "2 семестра".
                    </CustomText>
                    <FormRadio
                        value={ProjectDuration.OneSemester}
                        content="1 учебный семестр"
                        setValue={setProjectDuration}
                        checked={formData.project_duration === ProjectDuration.OneSemester}
                    />
                    <FormRadio
                        value={ProjectDuration.TwoSemesters}
                        content="2 учебный семестр"
                        setValue={setProjectDuration}
                        checked={formData.project_duration === ProjectDuration.TwoSemesters}
                    />
                    {!isValid.project_duration && (
                        <CustomText className={styles.errorMessage}>
                            Это поле обязательно для заполнения
                        </CustomText>
                    )}
                </FormCard>
                <FormCard title="6. Выберите уровень вашего проекта:">
                    <CustomText variant="body-3">
                        Cтуденты 1 курса 1 семестра выполняют диагностические проекты. можно решить
                        кейс с формализацией проблемы, поиском корневых причин, разработкой
                        возможных вариантов решения.<br></br>Cтуденты 1 курса 2 семестр выполняют
                        учебные проекты, которые характеризуются высокой степенью проработки
                        анализа, поиска корневых причин, нестандартного решения.<br></br>Студенты 2
                        курса выполняют выполняют учебно-прикладные проекты - Рекомендуется
                        сталкивание студенческих команд по принципу "лоб в лоб".
                        Экспертами-консультантами должны выступать представители внешних
                        производственных и научно-исследовательских организаций;<br></br>Студенты 3
                        и 4 курсов выполняют прикладные проекты. Разработанные проекты должны
                        обладать практической значимостью для отраслей производства. Консультация и
                        вовлеченность внешних экспертов должна предусматриваться на всех этапах
                        реализации проекта. Рекомендуется сталкивание студенческих команд по
                        принципу "лоб в лоб".
                    </CustomText>
                    <FormRadio
                        value={ProjectLevel.Diagnostic}
                        content="Диагностический проект"
                        setValue={setProjectLevel}
                        checked={formData.project_level === ProjectLevel.Diagnostic}
                    />
                    <FormRadio
                        value={ProjectLevel.Educational}
                        content="Учебный проект"
                        setValue={setProjectLevel}
                        checked={formData.project_level === ProjectLevel.Educational}
                    />
                    <FormRadio
                        value={ProjectLevel.EducationalApplied}
                        content="Учебно-прикладной проект"
                        setValue={setProjectLevel}
                        checked={formData.project_level === ProjectLevel.EducationalApplied}
                    />
                    <FormRadio
                        value={ProjectLevel.Applied}
                        content="Прикладной проект"
                        setValue={setProjectLevel}
                        checked={formData.project_level === ProjectLevel.Applied}
                    />
                    {!isValid.project_level && (
                        <CustomText className={styles.errorMessage}>
                            Это поле обязательно для заполнения
                        </CustomText>
                    )}
                </FormCard>
                <FormCard title="7. Укажите носителя проблемы:">
                    <CustomText variant="body-3">
                        Носитель проблемы - это должностное лицо, столкнувшееся с проблемой, которая
                        не решается стандартными методами решения и требует глубокого анализа и
                        проработки нестандартного решения.
                    </CustomText>
                    <FormTextArea
                        name="problemHolder"
                        value={formData.problem_holder}
                        setValue={(value) => handleInputChange('problem_holder', value)}
                        isValid={isValid.problem_holder}
                        placeholder={`Пример: Главный инженер центральной дирекции управления движением Иванов Иван Иванович.`}
                    />
                </FormCard>
                <FormCard title="8. Укажите цель проекта:">
                    <CustomText variant="body-3">
                        Цель проекта - то, что хочет увидеть заказчик в результате вашей работы над
                        проектом. Цель должна быть сформулирована чётко, с использованием
                        количественного показателя.
                    </CustomText>
                    <FormTextArea
                        name="projectGoal"
                        value={formData.project_goal}
                        setValue={(value) => handleInputChange('project_goal', value)}
                        isValid={isValid.project_goal}
                        placeholder={`Пример: увеличить точность определения вида почерка до 95%.`}
                    />
                </FormCard>
                <FormCard title="9. Укажите барьер:">
                    <CustomText variant="body-3">
                        Барьер - ответ на вопрос "что мешает носителю проблемы достичь поставленную
                        цель?".
                    </CustomText>
                    <FormTextArea
                        name="barrier"
                        value={formData.barrier}
                        setValue={(value) => handleInputChange('barrier', value)}
                        isValid={isValid.barrier}
                        placeholder={`Пример: Не может из-за имеющихся особенностей работы алгоритмов распознавания человеческого почерка`}
                    />
                </FormCard>
                <FormCard title="10. Укажите существующие решения:">
                    <CustomText variant="body-3">
                        Существующие решения - это перечень инструментов, методов, подходов и
                        готовых решений, частично подходящих (малоэффективных, иррациональных) для
                        выполнения поставленной цели.
                    </CustomText>
                    <FormTextArea
                        name="existingSolutions"
                        value={formData.existing_solutions}
                        setValue={(value) => handleInputChange('existing_solutions', value)}
                        isValid={isValid.existing_solutions}
                        placeholder={`Пример: Зарубежные аналоги не подходят по причине введенных санкций стран западного мира, отечественные программные продукты обеспечивают точности определения на уровне 65% в связи с слабой динамики исследования вопросов идентификации почерков`}
                    />
                </FormCard>
                <FormCard title="11. Укажите ключевые слова, по которым ваша заявка будет легко найдена:">
                    <FormTextArea
                        name="keywords"
                        value={formData.keywords}
                        setValue={(value) => handleInputChange('keywords', value)}
                        isValid={isValid.keywords}
                        placeholder={`Пример: машинная модель обучения, векторизация, лемматизация, метод TF-IDF`}
                    />
                </FormCard>
                <FormCard title="12. Укажите другие потенциально-заинтересованные стороны:">
                    <FormTextArea
                        name="interestedParties"
                        value={formData.interested_parties}
                        setValue={(value) => handleInputChange('interested_parties', value)}
                        isValid={isValid.interested_parties}
                        placeholder={`Пример: АО "Мосгипротранс", АО "ИЭРТ", АО "ПандаЭкспрессЛайн"`}
                    />
                </FormCard>
                <FormCard title="13. Укажите Ф.И.О., должность, подразделение, наименование организации потенциальных внутренних, внешних консультантов или экспертов:">
                    <CustomText variant="body-3">
                        Для представителей университета - Александров Александр Александрович,
                        доцент, кафедра "ЖДСТУ", ФГАОУ ВО (РУТ (МИИТ));<br></br>Для представителей
                        производственных и научно-исследовательских организаций - Александров
                        Александр Александрович, главный эксперт по имитационному моделированию,
                        центр экспертизы проектов, ОАО "РЖД".
                    </CustomText>
                    <FormTextArea
                        name="consultants"
                        value={formData.consultants}
                        setValue={(value) => handleInputChange('consultants', value)}
                        isValid={isValid.consultants}
                        placeholder={`Пример: Александров Александр Александрович, доцент, кафедра "ЖДСТУ", ФГАОУ ВО (РУТ (МИИТ))`}
                    />
                </FormCard>
                <FormCard title="14. Дополнительные материалы:">
                    <CustomText variant="body-3">
                        Укажите ссылки на имеющиеся разработки, старт-ап и другие прикладные
                        инструменты, формирующие проектную траекторию (трэк), необходимую для
                        достижения обозначенной цели.
                    </CustomText>
                    <FormTextArea
                        name="additionalMaterials"
                        value={formData.additional_materials}
                        setValue={(value) => handleInputChange('additional_materials', value)}
                        isValid={isValid.additional_materials}
                        placeholder={`Пример: https://example.com`}
                    />
                </FormCard>
                <FormCard title="15. Название проекта:">
                    <FormTextArea
                        name="projectName"
                        value={formData.project_name}
                        setValue={(value) => handleInputChange('project_name', value)}
                        isValid={isValid.project_name}
                        placeholder={`Пример: Я знаю кто ты`}
                    />
                </FormCard>
                <div className={styles.container}>
                    <Button view="action" size="xl" type="submit" disabled={isLoading}>
                        {isLoading ? <Loader size="s" /> : 'Подать заявку'}
                    </Button>
                </div>
            </form>
            <Modal open={modalIsOpen} onClose={handleCloseModal}>
                <div className={styles.modalContent}>
                    <CustomText variant="header-1">Ваша форма была успешно отправлена.</CustomText>
                    <Button
                        style={{marginTop: '20px'}}
                        view="action"
                        size="xl"
                        disabled={isLoading}
                        onClick={handleCloseModal}
                    >
                        Закрыть
                    </Button>
                </div>
            </Modal>
        </Container>
    );
};
