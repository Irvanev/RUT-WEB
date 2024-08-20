import React, {useState} from 'react';

import {Button, Card, Container, Text as CustomText, Loader} from '@gravity-ui/uikit';

import styles from './formPage.module.css';
import FormCard from '../../components/card/Card';
import FormInput from '../../components/input/Input';
import FormTextArea from '../../components/text-area/TextArea';
import FormRadio from '../../components/radio/Radio';

export const FormPage: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [projectDuration, setProjectDuration] = useState('');
    const [projectLavel, setProjectLavel] = useState('');
    const [problemHolder, setProblemHolder] = useState('');
    const [projectGoal, setProjectGoal] = useState('');
    const [barier, setBarier] = useState('');
    const [existingSolutions, setExistingSolutions] = useState('');
    const [keywords, setKeywords] = useState('');
    const [interestedParties, setInterestedParties] = useState('');
    const [consultants, setConsultants] = useState('');
    const [additionalMaterials, setAdditionalMaterials] = useState('');
    const [projectName, setProjectName] = useState('');

    const [isFullNameValid, setIsFullNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isPositionValid, setIsPositionValid] = useState(true);
    const [isProjectDurationValid, setIsProjectDurationValid] = useState(true);
    const [isProjectLavelValid, setIsProjectLavelValid] = useState(true);
    const [isProblemHolderValid, setIsProblemHolderValid] = useState(true);
    const [isProjectGoalValid, setIsProjectGoalValid] = useState(true);
    const [isBarierValid, setIsBarierValid] = useState(true);
    const [isExistingSolutionsValid, setIsExistingSolutionsValid] = useState(true);
    const [isKeywordsValid, setIsKeywordsValid] = useState(true);
    const [isInterestedPartiesValid, setIsInterestedPartiesValid] = useState(true);
    const [isConsultantsValid, setIsConsultantsValid] = useState(true);
    const [isAdditionalMaterialsValid, setIsAdditionalMaterialsValid] = useState(true);
    const [isProjectNameValid, setIsProjectNameValid] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const fields = [
            {value: fullName, setValid: setIsFullNameValid},
            {value: email, setValid: setIsEmailValid},
            {value: phone, setValid: setIsPhoneValid},
            {value: position, setValid: setIsPositionValid},
            {value: projectDuration, setValid: setIsProjectDurationValid},
            {value: projectLavel, setValid: setIsProjectLavelValid},
            {value: problemHolder, setValid: setIsProblemHolderValid},
            {value: projectGoal, setValid: setIsProjectGoalValid},
            {value: barier, setValid: setIsBarierValid},
            {value: existingSolutions, setValid: setIsExistingSolutionsValid},
            {value: keywords, setValid: setIsKeywordsValid},
            {value: interestedParties, setValid: setIsInterestedPartiesValid},
            {value: consultants, setValid: setIsConsultantsValid},
            {value: additionalMaterials, setValid: setIsAdditionalMaterialsValid},
            {value: projectName, setValid: setIsProjectNameValid},
        ];

        fields.forEach((field) => field.setValid(!!field.value));

        console.log({fullName, email});

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
                        value={fullName}
                        setValue={setFullName}
                        isValid={isFullNameValid}
                        placeholder="Александров Александр Александрович"
                    />
                </FormCard>
                <FormCard title="2. Электронная почта и контактный номер заполняющего проектную заявку:">
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        setValue={setEmail}
                        isValid={isEmailValid}
                        placeholder="pdrutmiit@yandex.ru"
                    />
                </FormCard>
                <FormCard title="3. Контактный номер заполняющего проектную заявку:">
                    <FormInput
                        name="phone"
                        type="tel"
                        value={phone}
                        setValue={setPhone}
                        isValid={isPhoneValid}
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
                        value={position}
                        setValue={setPosition}
                        isValid={isPositionValid}
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
                        value="1 семестр"
                        content="1 учебный семестр"
                        setValue={setProjectDuration}
                        checked={projectDuration === '1 семестр'}
                    />
                    <FormRadio
                        value="2 семестр"
                        content="2 учебный семестр"
                        setValue={setProjectDuration}
                        checked={projectDuration === '2 семестр'}
                    />
                    {!isProjectDurationValid && (
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
                        value="Диагностический проект"
                        content="Диагностический проект"
                        setValue={setProjectLavel}
                        checked={projectLavel === 'Диагностический проект'}
                    />
                    <FormRadio
                        value="Учебный проект"
                        content="Учебный проект"
                        setValue={setProjectLavel}
                        checked={projectLavel === 'Учебный проект'}
                    />
                    <FormRadio
                        value="Учебно-прикладной проект"
                        content="Учебно-прикладной проект"
                        setValue={setProjectLavel}
                        checked={projectLavel === 'Учебно-прикладной проект'}
                    />
                    <FormRadio
                        value="Прикладной проект"
                        content="Прикладной проект"
                        setValue={setProjectLavel}
                        checked={projectLavel === 'Прикладной проект'}
                    />
                    {!isProjectLavelValid && (
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
                        value={problemHolder}
                        setValue={setProblemHolder}
                        isValid={isProblemHolderValid}
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
                        name="problemHolder"
                        value={projectGoal}
                        setValue={setProjectGoal}
                        isValid={isProjectGoalValid}
                        placeholder={`Пример: увеличить точность определения вида почерка до 95%.`}
                    />
                </FormCard>
                <FormCard title="9. Укажите барьер:">
                    <CustomText variant="body-3">
                        Барьер - ответ на вопрос "что мешает носителю проблемы достичь поставленную
                        цель?".
                    </CustomText>
                    <FormTextArea
                        name="problemHolder"
                        value={barier}
                        setValue={setBarier}
                        isValid={isBarierValid}
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
                        name="problemHolder"
                        value={existingSolutions}
                        setValue={setExistingSolutions}
                        isValid={isExistingSolutionsValid}
                        placeholder={`Пример: Зарубежные аналоги не подходят по причине введенных санкций стран западного мира, отечественные программные продукты обеспечивают точности определения на уровне 65% в связи с слабой динамики исследования вопросов идентификации почерков`}
                    />
                </FormCard>
                <FormCard title="11. Укажите ключевые слова, по которым ваша заявка будет легко найдена:">
                    <FormTextArea
                        name="problemHolder"
                        value={keywords}
                        setValue={setKeywords}
                        isValid={isKeywordsValid}
                        placeholder={`Пример: машинная модель обучения, векторизация, лемматизация, метод TF-IDF`}
                    />
                </FormCard>
                <FormCard title="12. Укажите другие потенциально-заинтересованные стороны:">
                    <FormTextArea
                        name="problemHolder"
                        value={interestedParties}
                        setValue={setInterestedParties}
                        isValid={isInterestedPartiesValid}
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
                        name="problemHolder"
                        value={consultants}
                        setValue={setConsultants}
                        isValid={isConsultantsValid}
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
                        name="problemHolder"
                        value={additionalMaterials}
                        setValue={setAdditionalMaterials}
                        isValid={isAdditionalMaterialsValid}
                        placeholder={`Пример: https://example.com`}
                    />
                </FormCard>
                <FormCard title="15. Название проекта:">
                    <FormTextArea
                        name="problemHolder"
                        value={projectName}
                        setValue={setProjectName}
                        isValid={isProjectNameValid}
                        placeholder={`Пример: Я знаю кто ты`}
                    />
                </FormCard>
                <div className={styles.container}>
                    <Button view="action" size="xl" type="submit" disabled={isLoading}>
                        {isLoading ? <Loader size="s" /> : 'Подать заявку'}
                    </Button>
                </div>
            </form>
        </Container>
    );
};
