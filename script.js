const LANGUAGE_STORAGE_KEY = 'spiritual-journal-language';
const JOURNAL_STORAGE_KEY = 'spiritual-journal-entries-v1';
const OBSERVATIONS_STORAGE_KEY = 'spiritual-journal-observations-v1';

const uiCopy = Object.freeze({
  ru: {
    htmlLang: 'ru', dateLocale: 'ru-RU', title: 'Духовный дневник', subtitle: 'Самоисследование', begin: 'Начать',
    firstStep: 'Первый шаг начинается с тихого вдоха.', menuBack: 'На главный экран', backToMenu: 'К меню', menuTitle: 'Дневник',
    continueEntries: 'Продолжить запись', editPrevious: 'Просмотр дневника', selectDate: 'Выберите дату',
    instructionButton: 'Инструкция', instructionTitle: 'Инструкция по ведению духовного дневника', instructionBack: 'К меню',
    observationsButton: 'Мои наблюдения', observationsTitle: 'Мои наблюдения', observationsBack: 'К меню',
    observationsIntro: 'Свободные заметки о переживаниях, ситуациях, осознаниях и направлениях внутренней работы.',
    observationTextLabel: 'Текст наблюдения', observationPlaceholder: 'Что произошло? Что я почувствовал? Что я осознал? Над чем хочу поработать?',
    observationSave: 'Сохранить наблюдение', observationUpdate: 'Сохранить изменения', observationCancel: 'Отменить редактирование',
    observationEdit: 'Редактировать', observationDelete: 'Удалить', observationsEmpty: 'Здесь пока нет наблюдений.',
    observationSaved: 'Наблюдение сохранено', observationUpdated: 'Изменения сохранены', observationDeleted: 'Наблюдение удалено',
    observationTextRequired: 'Введите текст наблюдения.', observationsStorageError: 'Не удалось сохранить наблюдения в этом браузере.',
    historyTitle: 'Просмотр дневника', historyCurrentMonth: 'Текущий месяц', historyBackToMonths: 'К месяцам',
    historyNoEntries: 'За этот месяц нет сохранённых записей.', historyNoEntry: 'Нет записи', historyIndicators: 'Показатели',
    historyShowAnalytics: 'Показать аналитику за месяц', historyAnalyticsTitle: 'Аналитика за месяц', historyAnalyticsBack: 'К месяцу',
    historyAnalyticsViolations: 'Нарушения', historyAnalyticsChoices: 'Питание и служение', historyAnalyticsMeditation: 'Медитация',
    historyAnalyticsFilled: 'Заполнено', historyAnalyticsMissed: 'Пропущено', historyAnalyticsMax: 'Макс.',
    historyAnalyticsMin: 'Мин.', historyAnalyticsTotal: 'Всего', historyAnalyticsPrevious: 'Прошлый месяц',
    dateLabel: 'Дата записи', openEntry: 'Открыть запись',
    noEntry: 'За {date} пока нет записи. Вы можете начать её заполнение.', startEntry: 'Начать запись',
    entryTitle: 'Запись', entryTextLabel: 'Текст записи', entryPlaceholder: 'Запишите мысли, наблюдения или чувства…',
    save: 'Сохранить', saved: 'Сохранено', storageError: 'Не удалось сохранить запись в этом браузере.',
    pageDescription: 'Духовный дневник — тихое пространство для самоисследования.', languageLabel: 'Выбор языка',
    blockSelected: 'Выбрано: {block}.',
    backToBlocks: 'К блокам', nonviolenceTitle: 'Ненасилие', noViolations: 'Нарушений не было',
    truthfulnessTitle: 'Правдивость', truthfulnessReadOnly: 'Просмотр сохранённой записи.',
    truthfulnessProgress: 'Заполнено {filled} из 5 граф',
    chastityTitle: 'Целомудрие', chastityReadOnly: 'Просмотр сохранённой записи.',
    chastityProgress: 'Заполнено {filled} из 3 граф',
    loveAllBeingsTitle: 'Любовь ко всем существам', loveAllBeingsReadOnly: 'Просмотр сохранённой записи.',
    loveAllBeingsProgress: 'Заполнено {filled} из 3 граф',
    vegetarianFoodTitle: 'Вегетарианское питание',
    selflessServiceTitle: 'Бескорыстное служение', dailyChoicesReadOnly: 'Просмотр сохранённой записи.',
    dailyChoicesYes: 'Да', dailyChoicesNo: 'Нет',
    meditationTitle: 'Время медитации', meditationReadOnly: 'Просмотр сохранённой записи.', meditationHours: 'ч.',
    meditationCounters: { meditationInnerLight: 'На внутренний свет', meditationInnerSound: 'На внутренний звук' },
    nonviolenceReadOnly: 'Просмотр сохранённой записи.',
    nonviolenceProgress: 'Заполнено {filled} из 3 граф', nonviolenceStartReminder: 'Начните с любой графы.',
    nonviolenceRemaining: 'Осталось заполнить: {fields}', nonviolenceComplete: 'Все графы заполнены.',
    nonviolenceSaving: 'Сохраняем…', nonviolenceAutoSaved: 'Сохранено автоматически', nonviolenceSaved: 'Сохранено',
    nonviolenceStorageError: 'Не удалось сохранить. Повторите попытку.', retry: 'Повторить',
    allBlocks: 'Все блоки', nextBlock: 'Следующий блок', nextBlockMessage: 'Этот раздел пока в разработке.',
    nonviolenceCounters: { thoughts: 'В мыслях', words: 'В словах', actions: 'В поступках' },
    truthfulnessCounters: {
      untruth: 'Ложь', deception: 'Обман', hypocrisy: 'Лицемерие', fraud: 'Мошенничество',
      unlawfulEnrichment: 'Незаконное обогащение',
    },
    chastityCounters: { thoughts: 'В мыслях', words: 'В словах', actions: 'В поступках' },
    loveAllBeingsCounters: {
      knowledgePride: 'Гордость знаниями', wealthPride: 'Гордость богатством', statusPride: 'Гордость статусом',
    },
    decreaseCounter: 'Уменьшить количество нарушений: {label}', increaseCounter: 'Увеличить количество нарушений: {label}',
    decreaseMeditation: 'Уменьшить время медитации: {label}', increaseMeditation: 'Увеличить время медитации: {label}',
    blocks: {
      nonviolence: 'Ненасилие', truthfulness: 'Правдивость', chastity: 'Целомудрие',
      loveHumility: 'Любовь ко всем существам', vegetarianDiet: 'Вегетарианское питание',
      selflessService: 'Бескорыстное служение', meditationTime: 'Время медитации',
    },
  },
  uk: {
    htmlLang: 'uk', dateLocale: 'uk-UA', title: 'Духовний щоденник', subtitle: 'Самодослідження', begin: 'Почати',
    firstStep: 'Перший крок починається з тихого вдиху.', menuBack: 'На головний екран', backToMenu: 'До меню', menuTitle: 'Щоденник',
    continueEntries: 'Продовжити запис', editPrevious: 'Перегляд щоденника', selectDate: 'Оберіть дату',
    instructionButton: 'Інструкція', instructionTitle: 'Інструкція з ведення духовного щоденника', instructionBack: 'До меню',
    observationsButton: 'Мої спостереження', observationsTitle: 'Мої спостереження', observationsBack: 'До меню',
    observationsIntro: 'Вільні нотатки про переживання, ситуації, усвідомлення та напрями внутрішньої роботи.',
    observationTextLabel: 'Текст спостереження', observationPlaceholder: 'Що сталося? Що я відчув? Що я усвідомив? Над чим хочу попрацювати?',
    observationSave: 'Зберегти спостереження', observationUpdate: 'Зберегти зміни', observationCancel: 'Скасувати редагування',
    observationEdit: 'Редагувати', observationDelete: 'Видалити', observationsEmpty: 'Тут поки немає спостережень.',
    observationSaved: 'Спостереження збережено', observationUpdated: 'Зміни збережено', observationDeleted: 'Спостереження видалено',
    observationTextRequired: 'Введіть текст спостереження.', observationsStorageError: 'Не вдалося зберегти спостереження в цьому браузері.',
    historyTitle: 'Перегляд щоденника', historyCurrentMonth: 'Поточний місяць', historyBackToMonths: 'До місяців',
    historyNoEntries: 'За цей місяць немає збережених записів.', historyNoEntry: 'Немає запису', historyIndicators: 'Показники',
    historyShowAnalytics: 'Показати аналітику за місяць', historyAnalyticsTitle: 'Аналітика за місяць', historyAnalyticsBack: 'До місяця',
    historyAnalyticsViolations: 'Порушення', historyAnalyticsChoices: 'Харчування й служіння', historyAnalyticsMeditation: 'Медитація',
    historyAnalyticsFilled: 'Заповнено', historyAnalyticsMissed: 'Пропущено', historyAnalyticsMax: 'Макс.',
    historyAnalyticsMin: 'Мін.', historyAnalyticsTotal: 'Усього', historyAnalyticsPrevious: 'Минулий місяць',
    dateLabel: 'Дата запису', openEntry: 'Відкрити запис',
    noEntry: 'За {date} запису ще немає. Ви можете почати його заповнення.', startEntry: 'Почати запис',
    entryTitle: 'Запис', entryTextLabel: 'Текст запису', entryPlaceholder: 'Запишіть думки, спостереження або почуття…',
    save: 'Зберегти', saved: 'Збережено', storageError: 'Не вдалося зберегти запис у цьому браузері.',
    pageDescription: 'Духовний щоденник — тихий простір для самодослідження.', languageLabel: 'Вибір мови',
    blockSelected: 'Вибрано: {block}.',
    backToBlocks: 'До блоків', nonviolenceTitle: 'Ненасильство', noViolations: 'Порушень не було',
    truthfulnessTitle: 'Правдивість', truthfulnessReadOnly: 'Перегляд збереженого запису.',
    truthfulnessProgress: 'Заповнено {filled} з 5 граф',
    chastityTitle: 'Цнотливість', chastityReadOnly: 'Перегляд збереженого запису.',
    chastityProgress: 'Заповнено {filled} з 3 граф',
    loveAllBeingsTitle: 'Любов до всіх істот', loveAllBeingsReadOnly: 'Перегляд збереженого запису.',
    loveAllBeingsProgress: 'Заповнено {filled} з 3 граф',
    vegetarianFoodTitle: 'Вегетарианське харчування',
    selflessServiceTitle: 'Безкорисливе служіння', dailyChoicesReadOnly: 'Перегляд збереженого запису.',
    dailyChoicesYes: 'Так', dailyChoicesNo: 'Ні',
    meditationTitle: 'Час медитації', meditationReadOnly: 'Перегляд збереженого запису.', meditationHours: 'год.',
    meditationCounters: { meditationInnerLight: 'На внутрішнє світло', meditationInnerSound: 'На внутрішній звук' },
    nonviolenceReadOnly: 'Перегляд збереженого запису.',
    nonviolenceProgress: 'Заповнено {filled} з 3 граф', nonviolenceStartReminder: 'Почніть із будь-якої графи.',
    nonviolenceRemaining: 'Залишилося заповнити: {fields}', nonviolenceComplete: 'Усі графи заповнено.',
    nonviolenceSaving: 'Зберігаємо…', nonviolenceAutoSaved: 'Збережено автоматично', nonviolenceSaved: 'Збережено',
    nonviolenceStorageError: 'Не вдалося зберегти. Повторіть спробу.', retry: 'Повторити',
    allBlocks: 'Усі блоки', nextBlock: 'Наступний блок', nextBlockMessage: 'Цей розділ ще в розробці.',
    nonviolenceCounters: { thoughts: 'У думках', words: 'У словах', actions: 'У вчинках' },
    truthfulnessCounters: {
      untruth: 'Неправда', deception: 'Обман', hypocrisy: 'Лицемірство', fraud: 'Шахрайство',
      unlawfulEnrichment: 'Незаконне збагачення',
    },
    chastityCounters: { thoughts: 'У думках', words: 'У словах', actions: 'У вчинках' },
    loveAllBeingsCounters: {
      knowledgePride: 'Гордість знаннями', wealthPride: 'Гордість багатством', statusPride: 'Гордість статусом',
    },
    decreaseCounter: 'Зменшити кількість порушень: {label}', increaseCounter: 'Збільшити кількість порушень: {label}',
    decreaseMeditation: 'Зменшити час медитації: {label}', increaseMeditation: 'Збільшити час медитації: {label}',
    blocks: {
      nonviolence: 'Ненасильство', truthfulness: 'Правдивість', chastity: 'Цнотливість',
      loveHumility: 'Любов до всіх істот', vegetarianDiet: 'Вегетарианське харчування',
      selflessService: 'Безкорисливе служіння', meditationTime: 'Час медитації',
    },
  },
  en: {
    htmlLang: 'en', dateLocale: 'en-US', title: 'Spiritual Journal', subtitle: 'Self-Inquiry', begin: 'Begin',
    firstStep: 'The first step begins with one quiet breath.', menuBack: 'Back to home screen', backToMenu: 'Back to menu', menuTitle: 'Journal',
    continueEntries: 'Continue entry', editPrevious: 'View journal', selectDate: 'Choose a date',
    instructionButton: 'Guide', instructionTitle: 'Guide to Keeping a Spiritual Journal', instructionBack: 'Back to Menu',
    observationsButton: 'My observations', observationsTitle: 'My observations', observationsBack: 'Back to Menu',
    observationsIntro: 'Free notes about experiences, situations, insights, and directions for inner work.',
    observationTextLabel: 'Observation text', observationPlaceholder: 'What happened? What did I feel? What did I realise? What would I like to work on?',
    observationSave: 'Save observation', observationUpdate: 'Save changes', observationCancel: 'Cancel editing',
    observationEdit: 'Edit', observationDelete: 'Delete', observationsEmpty: 'There are no observations yet.',
    observationSaved: 'Observation saved', observationUpdated: 'Changes saved', observationDeleted: 'Observation deleted',
    observationTextRequired: 'Enter the observation text.', observationsStorageError: 'Observations could not be saved in this browser.',
    historyTitle: 'View journal', historyCurrentMonth: 'Current month', historyBackToMonths: 'Back to months',
    historyNoEntries: 'There are no saved entries for this month.', historyNoEntry: 'No entry', historyIndicators: 'Indicators',
    historyShowAnalytics: 'Show monthly analytics', historyAnalyticsTitle: 'Monthly analytics', historyAnalyticsBack: 'Back to month',
    historyAnalyticsViolations: 'Violations', historyAnalyticsChoices: 'Food and service', historyAnalyticsMeditation: 'Meditation',
    historyAnalyticsFilled: 'Completed', historyAnalyticsMissed: 'Missed', historyAnalyticsMax: 'Max',
    historyAnalyticsMin: 'Min', historyAnalyticsTotal: 'Total', historyAnalyticsPrevious: 'Previous month',
    dateLabel: 'Entry date', openEntry: 'Open entry',
    noEntry: 'There is no entry for {date} yet. You can begin one now.', startEntry: 'Start entry',
    entryTitle: 'Entry', entryTextLabel: 'Entry text', entryPlaceholder: 'Write down thoughts, observations, or feelings…',
    save: 'Save', saved: 'Saved', storageError: 'This browser could not save the entry.',
    pageDescription: 'Spiritual Journal — a quiet space for self-inquiry.', languageLabel: 'Language selection',
    blockSelected: 'Selected: {block}.',
    backToBlocks: 'Back to blocks', nonviolenceTitle: 'Nonviolence', noViolations: 'There were no violations',
    truthfulnessTitle: 'Truthfulness', truthfulnessReadOnly: 'Viewing a saved entry.',
    truthfulnessProgress: '{filled} of 5 fields completed',
    chastityTitle: 'Chastity', chastityReadOnly: 'Viewing a saved entry.',
    chastityProgress: '{filled} of 3 fields completed',
    loveAllBeingsTitle: 'Love for all beings', loveAllBeingsReadOnly: 'Viewing a saved entry.',
    loveAllBeingsProgress: '{filled} of 3 fields completed',
    vegetarianFoodTitle: 'Vegetarian diet',
    selflessServiceTitle: 'Selfless service', dailyChoicesReadOnly: 'Viewing a saved entry.',
    dailyChoicesYes: 'Yes', dailyChoicesNo: 'No',
    meditationTitle: 'Meditation time', meditationReadOnly: 'Viewing a saved entry.', meditationHours: 'hours',
    meditationCounters: { meditationInnerLight: 'For inner light', meditationInnerSound: 'For inner sound' },
    nonviolenceReadOnly: 'Viewing a saved entry.',
    nonviolenceProgress: '{filled} of 3 fields completed', nonviolenceStartReminder: 'Start with any field.',
    nonviolenceRemaining: 'Remaining: {fields}', nonviolenceComplete: 'All fields are complete.',
    nonviolenceSaving: 'Saving…', nonviolenceAutoSaved: 'Saved automatically', nonviolenceSaved: 'Saved',
    nonviolenceStorageError: 'Could not save. Please try again.', retry: 'Retry',
    allBlocks: 'All blocks', nextBlock: 'Next block', nextBlockMessage: 'This section is still in development.',
    nonviolenceCounters: { thoughts: 'In thoughts', words: 'In words', actions: 'In actions' },
    truthfulnessCounters: {
      untruth: 'Untruth', deception: 'Deception', hypocrisy: 'Hypocrisy', fraud: 'Fraud',
      unlawfulEnrichment: 'Unlawful enrichment',
    },
    chastityCounters: { thoughts: 'In thoughts', words: 'In words', actions: 'In actions' },
    loveAllBeingsCounters: {
      knowledgePride: 'Pride in knowledge', wealthPride: 'Pride in wealth', statusPride: 'Pride in status',
    },
    decreaseCounter: 'Decrease violations: {label}', increaseCounter: 'Increase violations: {label}',
    decreaseMeditation: 'Decrease meditation time: {label}', increaseMeditation: 'Increase meditation time: {label}',
    blocks: {
      nonviolence: 'Nonviolence', truthfulness: 'Truthfulness', chastity: 'Chastity',
      loveHumility: 'Love for all beings', vegetarianDiet: 'Vegetarian diet',
      selflessService: 'Selfless service', meditationTime: 'Meditation time',
    },
  },
});

const instructionContent = Object.freeze({
  ru: [
    {
      heading: 'Главная цель',
      paragraphs: [
        'Духовный дневник — это инструмент самоанализа и внутренней работы над собой. Он помогает лучше понимать себя, замечать свои мысли, желания, эмоции и поступки, выявлять то, что вызывает негативные эмоции, внутреннее напряжение и неудовлетворённость, а также постепенно изменять свои привычные реакции и модели поведения.',
        'Наблюдая за собой каждый день, ты учишься лучше понимать причины собственных поступков, замечать то, что раньше оставалось незамеченным, и постепенно переходить от автоматических реакций к осознанному выбору.',
      ],
    },
    {
      heading: 'Пять основных направлений внутренней работы',
      paragraphs: ['В основе духовного развития лежит работа над пятью внутренними препятствиями:'],
      listType: 'ol',
      list: [
        'Похоть — чрезмерная власть чувственных желаний над человеком.',
        'Жадность — стремление постоянно приобретать, обладать и получать больше.',
        'Гнев — внутреннее раздражение, неприязнь, злость и враждебность.',
        'Привязанность — зависимость от людей, вещей, обстоятельств и собственных ожиданий.',
        'Эго — чрезмерная сосредоточенность на собственном «я», гордость, самолюбие и стремление ставить себя выше других.',
      ],
      afterList: ['Эти пять направлений связаны между собой и могут проявляться в повседневных мыслях, чувствах, словах и поступках. Задача практики — научиться замечать их проявления и постепенно освобождаться от их влияния.'],
    },
    {
      heading: 'Семь направлений ежедневного наблюдения',
      paragraphs: ['Дневник разделён на семь блоков. Каждый из них помогает обратить внимание на определённую сторону повседневной жизни и внутренней работы.'],
      listType: 'ol',
      list: [
        'Ненасилие. Наблюдай за проявлениями агрессии, раздражения и причинением вреда другим существам — мыслями, словами или поступками.',
        'Правдивость. Обращай внимание на честность с собой и окружающими, замечай случаи лжи, самообмана и искажения правды.',
        'Целомудрие. Наблюдай за своими чувственными желаниями и тем, насколько они управляют твоими мыслями и поведением.',
        'Любовь ко всем существам. Замечай проявления доброжелательности, сострадания, терпимости и уважения к другим.',
        'Вегетарианское питание. Отмечай, придерживался ли ты этого принципа в течение дня.',
        'Бескорыстное служение. Обращай внимание на возможности помогать другим без ожидания награды или личной выгоды.',
        'Время медитации. Записывай продолжительность своей практики внутреннего сосредоточения и духовного развития.',
      ],
    },
    {
      heading: 'Дисциплина и регулярность',
      paragraphs: [
        'Ведение дневника требует честности и последовательности. Старайся делать записи ежедневно, не откладывая их на потом.',
        'Записи за прошедшие дни не следует исправлять или заполнять задним числом. Важно сохранять честную картину своей практики, такой, какой она была на самом деле.',
        'Количество пропусков за месяц помогает увидеть уровень собственной дисциплины, устойчивость намерения и готовность регулярно работать над собой.',
        'Никто не оценивает тебя и не требует отчёта. Ты ведёшь этот дневник для себя и отвечаешь только перед собой. Здесь нет наказаний за пропуски или неудачные дни. Есть возможность увидеть реальное положение дел и продолжить работу над собой.',
      ],
    },
    {
      heading: 'Осознанность и постепенные изменения',
      paragraphs: [
        'Не стремись к мгновенному совершенству. Внутренняя работа требует времени, терпения и искреннего отношения к себе.',
        'Старайся не просто отмечать события, но и понимать, почему ты поступил именно так, что повлияло на твои мысли и чувства, какие реакции повторяются и что можно изменить в следующий раз.',
        'Главное — не осуждать себя, а учиться наблюдать, понимать и делать осознанный выбор.',
        'Постепенно регулярный самоанализ помогает лучше узнавать себя, укреплять внутреннюю дисциплину и менять привычные модели поведения.',
      ],
    },
    {
      heading: 'Источники и основа методики',
      paragraphs: [
        'Методика ведения дневника основана на духовных беседах, наставлениях и принципах самоанализа, изложенных Сант Кирпал Сингхом. Приложение создано для того, чтобы сделать эту практику доступнее и удобнее в повседневной жизни.',
        'В качестве источников использованы:',
      ],
      links: [
        { label: 'On Keeping the Diary — беседа от 19 октября 1968 года', url: 'https://kirpalsingh-mission.org/uom/en/library/sant-kirpal-singh-circular-letters/on-keeping-the-diary/' },
        { label: 'The Teachings of Kirpal Singh, Volume II: Self-Introspection & Meditation — глава How to Do Your Diary', url: 'https://ruhanisatsangusa.org/pdf/Volume2-Self-Introspection.pdf' },
        { label: 'Self-Introspection Diary', url: 'https://kirpalsingh-teachings.org/images/booklets/Diary_engl.pdf' },
        { label: 'On Keeping the Diary — беседа 1 ноября 1973 года', url: 'https://ruhanisatsangusa.org/ondiary.htm' },
      ],
      afterLinks: ['Цифровая структура дневника, его блоки, система записей и аналитические инструменты являются реализацией данного приложения. Они предназначены для удобства ежедневной практики и не должны восприниматься как отдельные цифровые предписания Сант Кирпал Сингха.'],
    },
  ],
  uk: [
    {
      heading: 'Головна мета',
      paragraphs: [
        'Духовний щоденник — це інструмент самоаналізу та внутрішньої роботи над собою. Він допомагає краще розуміти себе, помічати свої думки, бажання, емоції та вчинки, виявляти те, що викликає негативні емоції, внутрішнє напруження й незадоволеність, а також поступово змінювати свої звичні реакції та моделі поведінки.',
        'Спостерігаючи за собою щодня, ти вчишся краще розуміти причини власних вчинків, помічати те, що раніше залишалося непоміченим, і поступово переходити від автоматичних реакцій до усвідомленого вибору.',
      ],
    },
    {
      heading: 'П’ять основних напрямів внутрішньої роботи',
      paragraphs: ['В основі духовного розвитку лежить робота над п’ятьма внутрішніми перешкодами:'],
      listType: 'ol',
      list: [
        'Похіть — надмірна влада чуттєвих бажань над людиною.',
        'Жадібність — прагнення постійно набувати, володіти й отримувати більше.',
        'Гнів — внутрішнє роздратування, неприязнь, злість і ворожість.',
        'Прив’язаність — залежність від людей, речей, обставин і власних очікувань.',
        'Его — надмірна зосередженість на власному «я», гордість, самолюбство й прагнення ставити себе вище за інших.',
      ],
      afterList: ['Ці п’ять напрямів пов’язані між собою й можуть проявлятися в повсякденних думках, почуттях, словах і вчинках. Завдання практики — навчитися помічати їхні прояви та поступово звільнятися від їхнього впливу.'],
    },
    {
      heading: 'Сім напрямів щоденного спостереження',
      paragraphs: ['Щоденник поділено на сім блоків. Кожен із них допомагає звернути увагу на певний бік повсякденного життя та внутрішньої роботи.'],
      listType: 'ol',
      list: [
        'Ненасильство. Спостерігай за проявами агресії, роздратування та завданням шкоди іншим істотам — думками, словами чи вчинками.',
        'Правдивість. Звертай увагу на чесність із собою та іншими, помічай випадки неправди, самообману й викривлення правди.',
        'Цнотливість. Спостерігай за своїми чуттєвими бажаннями та за тим, наскільки вони керують твоїми думками й поведінкою.',
        'Любов до всіх істот. Помічай прояви доброзичливості, співчуття, терпимості та поваги до інших.',
        'Вегетарианське харчування. Відзначай, чи дотримувався ти цього принципу протягом дня.',
        'Безкорисливе служіння. Звертай увагу на можливості допомагати іншим без очікування винагороди або особистої вигоди.',
        'Час медитації. Записуй тривалість своєї практики внутрішнього зосередження та духовного розвитку.',
      ],
    },
    {
      heading: 'Дисципліна й регулярність',
      paragraphs: [
        'Ведення щоденника потребує чесності й послідовності. Намагайся робити записи щодня, не відкладаючи їх на потім.',
        'Записи за минулі дні не слід виправляти або заповнювати заднім числом. Важливо зберігати чесну картину своєї практики такою, якою вона була насправді.',
        'Кількість пропусків за місяць допомагає побачити рівень власної дисципліни, стійкість наміру й готовність регулярно працювати над собою.',
        'Ніхто тебе не оцінює і не вимагає звіту. Ти ведеш цей щоденник для себе й відповідаєш лише перед собою. Тут немає покарань за пропуски або невдалі дні. Є можливість побачити реальний стан справ і продовжити роботу над собою.',
      ],
    },
    {
      heading: 'Усвідомленість і поступові зміни',
      paragraphs: [
        'Не прагни миттєвої досконалості. Внутрішня робота потребує часу, терпіння та щирого ставлення до себе.',
        'Намагайся не просто відзначати події, а й розуміти, чому ти вчинив саме так, що вплинуло на твої думки та почуття, які реакції повторюються і що можна змінити наступного разу.',
        'Головне — не засуджувати себе, а вчитися спостерігати, розуміти й робити усвідомлений вибір.',
        'Поступово регулярний самоаналіз допомагає краще пізнавати себе, зміцнювати внутрішню дисципліну та змінювати звичні моделі поведінки.',
      ],
    },
    {
      heading: 'Джерела й основа методики',
      paragraphs: [
        'Методика ведення щоденника ґрунтується на духовних бесідах, настановах і принципах самоаналізу, викладених Сант Кирпал Сінгхом. Застосунок створено для того, щоб зробити цю практику доступнішою та зручнішою у повсякденному житті.',
        'Як джерела використано:',
      ],
      links: [
        { label: 'On Keeping the Diary — бесіда від 19 жовтня 1968 року', url: 'https://kirpalsingh-mission.org/uom/en/library/sant-kirpal-singh-circular-letters/on-keeping-the-diary/' },
        { label: 'The Teachings of Kirpal Singh, Volume II: Self-Introspection & Meditation — розділ How to Do Your Diary', url: 'https://ruhanisatsangusa.org/pdf/Volume2-Self-Introspection.pdf' },
        { label: 'Self-Introspection Diary', url: 'https://kirpalsingh-teachings.org/images/booklets/Diary_engl.pdf' },
        { label: 'On Keeping the Diary — бесіда 1 листопада 1973 року', url: 'https://ruhanisatsangusa.org/ondiary.htm' },
      ],
      afterLinks: ['Цифрова структура щоденника, його блоки, система записів і аналітичні інструменти є реалізацією цього застосунку. Вони призначені для зручності щоденної практики й не повинні сприйматися як окремі цифрові приписи Сант Кирпал Сінгха.'],
    },
  ],
  en: [
    {
      heading: 'The main purpose',
      paragraphs: [
        'A spiritual journal is a tool for self-analysis and inner work. It helps you understand yourself better, notice your thoughts, desires, emotions, and actions, identify what causes negative emotions, inner tension, and dissatisfaction, and gradually change habitual reactions and patterns of behaviour.',
        'By observing yourself every day, you learn to understand the reasons for your actions more clearly, notice what once went unnoticed, and gradually move from automatic reactions to conscious choice.',
      ],
    },
    {
      heading: 'Five main areas of inner work',
      paragraphs: ['Spiritual development is based on working with five inner obstacles:'],
      listType: 'ol',
      list: [
        'Lust — the excessive power of sensual desires over a person.',
        'Greed — the urge to constantly acquire, possess, and receive more.',
        'Anger — inner irritation, dislike, rage, and hostility.',
        'Attachment — dependence on people, things, circumstances, and personal expectations.',
        'Ego — excessive preoccupation with one’s own self, pride, self-importance, and the wish to place oneself above others.',
      ],
      afterList: ['These five areas are interconnected and can appear in everyday thoughts, feelings, words, and actions. The task of the practice is to learn to notice their manifestations and gradually free oneself from their influence.'],
    },
    {
      heading: 'Seven areas of daily observation',
      paragraphs: ['The journal is divided into seven blocks. Each one helps you attend to a particular aspect of daily life and inner work.'],
      listType: 'ol',
      list: [
        'Nonviolence. Observe manifestations of aggression, irritation, and harm toward other beings in thoughts, words, or actions.',
        'Truthfulness. Pay attention to honesty with yourself and others; notice instances of lies, self-deception, and distortion of truth.',
        'Chastity. Observe sensual desires and the degree to which they govern your thoughts and behaviour.',
        'Love for all beings. Notice expressions of goodwill, compassion, tolerance, and respect for others.',
        'Vegetarian diet. Note whether you followed this principle during the day.',
        'Selfless service. Notice opportunities to help others without expecting reward or personal benefit.',
        'Meditation time. Record the duration of your practice of inner concentration and spiritual development.',
      ],
    },
    {
      heading: 'Discipline and regularity',
      paragraphs: [
        'Keeping a journal requires honesty and consistency. Try to make entries every day without postponing them.',
        'Entries for past days should not be corrected or completed retroactively. It is important to preserve an honest picture of your practice as it truly was.',
        'The number of missed days during a month helps you see the level of your own discipline, the steadiness of your intention, and your readiness to work on yourself regularly.',
        'No one is judging you or asking for a report. You keep this journal for yourself and are answerable only to yourself. There are no punishments for missed or difficult days. There is an opportunity to see the actual state of things and continue your inner work.',
      ],
    },
    {
      heading: 'Awareness and gradual change',
      paragraphs: [
        'Do not seek instant perfection. Inner work requires time, patience, and a sincere attitude toward yourself.',
        'Try not only to note events, but also to understand why you acted as you did, what influenced your thoughts and feelings, which reactions recur, and what can be changed next time.',
        'The main thing is not to condemn yourself, but to learn to observe, understand, and make a conscious choice.',
        'Over time, regular self-analysis helps you know yourself better, strengthen inner discipline, and change habitual patterns of behaviour.',
      ],
    },
    {
      heading: 'Sources and basis of the method',
      paragraphs: [
        'The method of keeping the journal is based on the spiritual talks, guidance, and principles of self-analysis presented by Sant Kirpal Singh. The application was created to make this practice more accessible and convenient in everyday life.',
        'The following sources were used:',
      ],
      links: [
        { label: 'On Keeping the Diary — talk of 19 October 1968', url: 'https://kirpalsingh-mission.org/uom/en/library/sant-kirpal-singh-circular-letters/on-keeping-the-diary/' },
        { label: 'The Teachings of Kirpal Singh, Volume II: Self-Introspection & Meditation — chapter How to Do Your Diary', url: 'https://ruhanisatsangusa.org/pdf/Volume2-Self-Introspection.pdf' },
        { label: 'Self-Introspection Diary', url: 'https://kirpalsingh-teachings.org/images/booklets/Diary_engl.pdf' },
        { label: 'On Keeping the Diary — talk of 1 November 1973', url: 'https://ruhanisatsangusa.org/ondiary.htm' },
      ],
      afterLinks: ['The digital structure of the journal, its blocks, record system, and analytical tools are an implementation of this application. They are intended to support daily practice and should not be understood as separate digital prescriptions of Sant Kirpal Singh.'],
    },
  ],
});

const supportedLanguages = Object.keys(uiCopy);
const screens = {
  landing: document.querySelector('#landing-screen'),
  menu: document.querySelector('#menu-screen'),
  blocks: document.querySelector('#blocks-screen'),
  nonviolence: document.querySelector('#nonviolence-screen'),
  truthfulness: document.querySelector('#truthfulness-screen'),
  chastity: document.querySelector('#chastity-screen'),
  loveAllBeings: document.querySelector('#love-all-beings-screen'),
  dailyChoices: document.querySelector('#daily-choices-screen'),
  meditation: document.querySelector('#meditation-screen'),
  instruction: document.querySelector('#instruction-screen'),
  observations: document.querySelector('#observations-screen'),
  historyMonths: document.querySelector('#history-months-screen'),
  historyDays: document.querySelector('#history-days-screen'),
  historyAnalytics: document.querySelector('#history-analytics-screen'),
  date: document.querySelector('#date-screen'),
  editor: document.querySelector('#editor-screen'),
};
const languageButtons = document.querySelectorAll('[data-language]');
const languageSwitches = document.querySelectorAll('.language-switch');
const title = document.querySelector('#page-title');
const subtitle = document.querySelector('#subtitle');
const startLabel = document.querySelector('#start-label');
const startButton = document.querySelector('#start-button');
const menuBack = document.querySelector('#menu-back span');
const blocksBack = document.querySelector('#blocks-back span');
const nonviolenceBack = document.querySelector('#nonviolence-back span');
const dateBack = document.querySelector('#date-back span');
const editorBack = document.querySelector('#editor-back span');
const menuKicker = document.querySelector('#menu-kicker');
const menuGreeting = document.querySelector('#menu-greeting');
const continueButton = document.querySelector('#continue-button');
const previousButton = document.querySelector('#previous-button');
const instructionButton = document.querySelector('#instruction-button');
const instructionBack = document.querySelector('#instruction-back span');
const instructionKicker = document.querySelector('#instruction-kicker');
const instructionTitle = document.querySelector('#instruction-title');
const instructionScreenContent = document.querySelector('#instruction-content');
const observationsButton = document.querySelector('#observations-button');
const observationsBack = document.querySelector('#observations-back span');
const observationsKicker = document.querySelector('#observations-kicker');
const observationsTitle = document.querySelector('#observations-title');
const observationsIntro = document.querySelector('#observations-intro');
const observationForm = document.querySelector('#observation-form');
const observationText = document.querySelector('#observation-text');
const observationTextLabel = document.querySelector('#observation-text-label');
const observationSave = document.querySelector('#observation-save');
const observationCancel = document.querySelector('#observation-cancel');
const observationStatus = document.querySelector('#observation-status');
const observationList = document.querySelector('#observation-list');
const blocksKicker = document.querySelector('#blocks-kicker');
const journalBlockButtons = document.querySelectorAll('[data-journal-block]');
const blockSelection = document.querySelector('#block-selection');
const nonviolenceKicker = document.querySelector('#nonviolence-kicker');
const nonviolenceTitle = document.querySelector('#nonviolence-title');
const nonviolenceDate = document.querySelector('#nonviolence-date');
const nonviolenceReadOnly = document.querySelector('#nonviolence-read-only');
const nonviolenceProgress = document.querySelector('#nonviolence-progress');
const nonviolenceReminder = document.querySelector('#nonviolence-reminder');
const nonviolenceSaveStatus = document.querySelector('#nonviolence-save-status');
const nonviolenceRetry = document.querySelector('#nonviolence-retry');
const nonviolenceNext = document.querySelector('#nonviolence-next');
const nonviolenceNextLabel = document.querySelector('#nonviolence-next-label');
const nonviolenceNextNotice = document.querySelector('#nonviolence-next-notice');
const nonviolenceCounterLabels = document.querySelectorAll('[id^="counter-"][id$="-label"]');
const counterValues = document.querySelectorAll('[data-counter-value]');
const counterButtons = document.querySelectorAll('[data-counter-action]');
const truthfulnessBack = document.querySelector('#truthfulness-back span');
const truthfulnessKicker = document.querySelector('#truthfulness-kicker');
const truthfulnessTitle = document.querySelector('#truthfulness-title');
const truthfulnessDate = document.querySelector('#truthfulness-date');
const truthfulnessReadOnly = document.querySelector('#truthfulness-read-only');
const truthfulnessProgress = document.querySelector('#truthfulness-progress');
const truthfulnessSaveStatus = document.querySelector('#truthfulness-save-status');
const truthfulnessRetry = document.querySelector('#truthfulness-retry');
const truthfulnessNext = document.querySelector('#truthfulness-next');
const truthfulnessNextLabel = document.querySelector('#truthfulness-next-label');
const truthfulnessNextNotice = document.querySelector('#truthfulness-next-notice');
const truthfulnessCounterLabels = document.querySelectorAll('[id^="truthfulness-counter-"][id$="-label"]');
const truthfulnessValues = document.querySelectorAll('[data-truthfulness-value]');
const truthfulnessButtons = document.querySelectorAll('[data-truthfulness-action]');
const chastityBack = document.querySelector('#chastity-back span');
const chastityKicker = document.querySelector('#chastity-kicker');
const chastityTitle = document.querySelector('#chastity-title');
const chastityDate = document.querySelector('#chastity-date');
const chastityReadOnly = document.querySelector('#chastity-read-only');
const chastityProgress = document.querySelector('#chastity-progress');
const chastitySaveStatus = document.querySelector('#chastity-save-status');
const chastityRetry = document.querySelector('#chastity-retry');
const chastityNext = document.querySelector('#chastity-next');
const chastityNextLabel = document.querySelector('#chastity-next-label');
const chastityNextNotice = document.querySelector('#chastity-next-notice');
const chastityCounterLabels = document.querySelectorAll('[id^="chastity-counter-"][id$="-label"]');
const chastityValues = document.querySelectorAll('[data-chastity-value]');
const chastityButtons = document.querySelectorAll('[data-chastity-action]');
const loveAllBeingsBack = document.querySelector('#love-all-beings-back span');
const loveAllBeingsKicker = document.querySelector('#love-all-beings-kicker');
const loveAllBeingsTitle = document.querySelector('#love-all-beings-title');
const loveAllBeingsDate = document.querySelector('#love-all-beings-date');
const loveAllBeingsReadOnly = document.querySelector('#love-all-beings-read-only');
const loveAllBeingsProgress = document.querySelector('#love-all-beings-progress');
const loveAllBeingsSaveStatus = document.querySelector('#love-all-beings-save-status');
const loveAllBeingsRetry = document.querySelector('#love-all-beings-retry');
const loveAllBeingsNext = document.querySelector('#love-all-beings-next');
const loveAllBeingsNextLabel = document.querySelector('#love-all-beings-next-label');
const loveAllBeingsNextNotice = document.querySelector('#love-all-beings-next-notice');
const loveAllBeingsCounterLabels = document.querySelectorAll('[id^="love-all-beings-counter-"][id$="-label"]');
const loveAllBeingsValues = document.querySelectorAll('[data-love-all-beings-value]');
const loveAllBeingsButtons = document.querySelectorAll('[data-love-all-beings-action]');
const dailyChoicesKicker = document.querySelector('#daily-choices-kicker');
const dailyChoicesDate = document.querySelector('#daily-choices-date');
const dailyChoicesReadOnly = document.querySelector('#daily-choices-read-only');
const dailyChoicesSaveStatus = document.querySelector('#daily-choices-save-status');
const vegetarianFoodTitle = document.querySelector('#vegetarian-food-title');
const selflessServiceTitle = document.querySelector('#selfless-service-title');
const dailyChoicesBack = document.querySelector('#daily-choices-back span');
const dailyChoicesNext = document.querySelector('#daily-choices-next');
const dailyChoicesNextLabel = document.querySelector('#daily-choices-next-label');
const dailyChoicesNextNotice = document.querySelector('#daily-choices-next-notice');
const dailyChoiceButtons = document.querySelectorAll('[data-daily-choice-section]');
const meditationBack = document.querySelector('#meditation-back span');
const meditationKicker = document.querySelector('#meditation-kicker');
const meditationTitle = document.querySelector('#meditation-title');
const meditationDate = document.querySelector('#meditation-date');
const meditationReadOnly = document.querySelector('#meditation-read-only');
const meditationSaveStatus = document.querySelector('#meditation-save-status');
const meditationCounterLabels = document.querySelectorAll('[id^="meditation-"][id$="-label"]');
const meditationValues = document.querySelectorAll('[data-meditation-value]');
const meditationUnits = document.querySelectorAll('[data-meditation-unit]');
const meditationButtons = document.querySelectorAll('[data-meditation-action]');
const historyMonthsBack = document.querySelector('#history-months-back span');
const historyMonthsKicker = document.querySelector('#history-months-kicker');
const historyMonthsTitle = document.querySelector('#history-months-title');
const historyMonthList = document.querySelector('#history-month-list');
const historyDaysBack = document.querySelector('#history-days-back span');
const historyDaysKicker = document.querySelector('#history-days-kicker');
const historyDaysTitle = document.querySelector('#history-days-title');
const historyCurrentLabel = document.querySelector('#history-current-label');
const historyAnalyticsButton = document.querySelector('#history-analytics-button');
const historyDayList = document.querySelector('#history-day-list');
const historyAnalyticsBack = document.querySelector('#history-analytics-back span');
const historyAnalyticsKicker = document.querySelector('#history-analytics-kicker');
const historyAnalyticsTitle = document.querySelector('#history-analytics-title');
const historyAnalyticsMonth = document.querySelector('#history-analytics-month');
const historyAnalyticsList = document.querySelector('#history-analytics-list');
const dateKicker = document.querySelector('#date-kicker');
const dateTitle = document.querySelector('#date-title');
const dateLabel = document.querySelector('#date-label');
const entryDate = document.querySelector('#entry-date');
const dateConfirm = document.querySelector('#date-confirm');
const dateNotice = document.querySelector('#date-notice');
const createDateEntry = document.querySelector('#create-date-entry');
const editorKicker = document.querySelector('#editor-kicker');
const editorTitle = document.querySelector('#editor-title');
const editorDate = document.querySelector('#editor-date');
const entryTextLabel = document.querySelector('#entry-text-label');
const entryText = document.querySelector('#entry-text');
const saveEntry = document.querySelector('#save-entry');
const saveStatus = document.querySelector('#save-status');
const description = document.querySelector('meta[name="description"]');

let currentLanguage = 'ru';
let activeDate = null;
let noticeDate = null;
let saveState = '';
let selectedBlock = null;
let activeNonviolenceDate = null;
let nonviolenceSaveState = 'idle';
let pendingNonviolenceChange = null;
let nonviolenceSaveFeedbackTimer = null;
let nonviolenceNextNoticeVisible = false;
let activeTruthfulnessDate = null;
let truthfulnessSaveState = 'idle';
let pendingTruthfulnessChange = null;
let truthfulnessSaveFeedbackTimer = null;
let truthfulnessNextNoticeVisible = false;
let activeChastityDate = null;
let chastitySaveState = 'idle';
let pendingChastityChange = null;
let chastitySaveFeedbackTimer = null;
let chastityNextNoticeVisible = false;
let activeLoveAllBeingsDate = null;
let loveAllBeingsSaveState = 'idle';
let pendingLoveAllBeingsChange = null;
let loveAllBeingsSaveFeedbackTimer = null;
let loveAllBeingsNextNoticeVisible = false;
let activeDailyChoicesDate = null;
let dailyChoicesSaveState = 'idle';
let dailyChoicesSaveFeedbackTimer = null;
let dailyChoicesNextNoticeVisible = false;
let activeMeditationDate = null;
let meditationSaveState = 'idle';
let meditationSaveFeedbackTimer = null;
let selectedHistoryMonth = null;
let editingObservationId = null;
let observationFeedback = '';
let observationFeedbackType = 'success';

const NONVIOLENCE_FIELDS = ['thoughts', 'words', 'actions'];
const TRUTHFULNESS_FIELDS = ['untruth', 'deception', 'hypocrisy', 'fraud', 'unlawfulEnrichment'];
const CHASTITY_FIELDS = ['thoughts', 'words', 'actions'];
const LOVE_ALL_BEINGS_FIELDS = ['knowledgePride', 'wealthPride', 'statusPride'];
const DAILY_CHOICE_FIELDS = ['vegetarianFood', 'selflessService'];
const MEDITATION_FIELDS = ['meditationInnerLight', 'meditationInnerSound'];

function normalizeLanguage(value) {
  return typeof value === 'string' ? value.toLowerCase().split('-')[0] : null;
}

function getSavedLanguage() {
  try {
    const language = normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY));
    return supportedLanguages.includes(language) ? language : null;
  } catch {
    return null;
  }
}

function getBrowserLanguage() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.map(normalizeLanguage).find((language) => supportedLanguages.includes(language)) || 'ru';
}

function getTodayKey() {
  const date = new Date();
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

function formatDate(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number);
  return new Intl.DateTimeFormat(uiCopy[currentLanguage].dateLocale, {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(year, month - 1, day, 12));
}

function getJournalData() {
  try {
    const rawData = localStorage.getItem(JOURNAL_STORAGE_KEY);
    if (!rawData) return { version: 1, entries: {} };
    const data = JSON.parse(rawData);
    return data && typeof data === 'object' && data.entries && typeof data.entries === 'object' ? data : null;
  } catch {
    return null;
  }
}

function getEntry(dateKey) {
  return getJournalData()?.entries?.[dateKey] || null;
}

function saveEntryForDate(dateKey, text = '') {
  const journalData = getJournalData();
  if (!journalData) return false;

  const existingEntry = journalData.entries[dateKey];
  const timestamp = new Date().toISOString();
  journalData.entries[dateKey] = {
    ...existingEntry,
    text,
    createdAt: existingEntry?.createdAt || timestamp,
    updatedAt: timestamp,
  };

  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalData));
    return true;
  } catch {
    return false;
  }
}

function ensureEntry(dateKey) {
  return getEntry(dateKey) || saveEntryForDate(dateKey, '');
}

function getObservations() {
  try {
    const rawData = localStorage.getItem(OBSERVATIONS_STORAGE_KEY);
    if (!rawData) return [];
    const observations = JSON.parse(rawData);
    if (!Array.isArray(observations)) return [];
    return observations
      .filter((observation) => observation && typeof observation.id === 'string' && typeof observation.text === 'string'
        && typeof observation.createdAt === 'string' && typeof observation.updatedAt === 'string')
      .sort((first, second) => second.createdAt.localeCompare(first.createdAt));
  } catch {
    return [];
  }
}

function saveObservations(observations) {
  try {
    localStorage.setItem(OBSERVATIONS_STORAGE_KEY, JSON.stringify(observations));
    return true;
  } catch {
    return false;
  }
}

function createObservationId() {
  if (typeof globalThis.crypto?.randomUUID === 'function') return globalThis.crypto.randomUUID();
  return `observation-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatObservationDate(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(uiCopy[currentLanguage].dateLocale, {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }).format(date);
}

function updateInstructionScreen() {
  const copy = uiCopy[currentLanguage];
  instructionBack.textContent = copy.instructionBack;
  instructionKicker.textContent = copy.title;
  instructionTitle.textContent = copy.instructionTitle;
  instructionScreenContent.replaceChildren();

  instructionContent[currentLanguage].forEach((section) => {
    const sectionElement = document.createElement('section');
    const heading = document.createElement('h2');
    sectionElement.className = 'instruction-section';
    heading.textContent = section.heading;
    sectionElement.append(heading);
    section.paragraphs.forEach((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      sectionElement.append(paragraph);
    });
    if (section.list) {
      const list = document.createElement(section.listType || 'ul');
      section.list.forEach((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        list.append(item);
      });
      sectionElement.append(list);
    }
    if (section.afterList) {
      section.afterList.forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        sectionElement.append(paragraph);
      });
    }
    if (section.links) {
      const list = document.createElement('ul');
      section.links.forEach((source) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = source.url;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.textContent = source.label;
        item.append(link);
        list.append(item);
      });
      sectionElement.append(list);
    }
    if (section.afterLinks) {
      section.afterLinks.forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        sectionElement.append(paragraph);
      });
    }
    instructionScreenContent.append(sectionElement);
  });
}

function updateObservationsScreen() {
  const copy = uiCopy[currentLanguage];
  const observations = getObservations();
  const isEditing = Boolean(editingObservationId);

  observationsBack.textContent = copy.observationsBack;
  observationsKicker.textContent = copy.title;
  observationsTitle.textContent = copy.observationsTitle;
  observationsIntro.textContent = copy.observationsIntro;
  observationTextLabel.textContent = copy.observationTextLabel;
  observationText.placeholder = copy.observationPlaceholder;
  observationSave.textContent = isEditing ? copy.observationUpdate : copy.observationSave;
  observationCancel.textContent = copy.observationCancel;
  observationCancel.hidden = !isEditing;
  observationStatus.textContent = observationFeedback;
  observationStatus.hidden = !observationFeedback;
  observationStatus.classList.toggle('is-error', observationFeedbackType === 'error');
  observationList.replaceChildren();

  if (!observations.length) {
    const empty = document.createElement('p');
    empty.className = 'observation-empty';
    empty.textContent = copy.observationsEmpty;
    observationList.append(empty);
    return;
  }

  observations.forEach((observation) => {
    const card = document.createElement('article');
    const date = document.createElement('p');
    const text = document.createElement('p');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const remove = document.createElement('button');

    card.className = 'observation-card';
    date.className = 'observation-date';
    text.className = 'observation-text';
    actions.className = 'observation-actions';
    edit.className = 'observation-action';
    remove.className = 'observation-action is-delete';
    date.textContent = formatObservationDate(observation.createdAt);
    text.textContent = observation.text;
    edit.type = 'button';
    edit.textContent = copy.observationEdit;
    edit.addEventListener('click', () => editObservation(observation.id));
    remove.type = 'button';
    remove.textContent = copy.observationDelete;
    remove.addEventListener('click', () => deleteObservation(observation.id));
    actions.append(edit, remove);
    card.append(date, text, actions);
    observationList.append(card);
  });
}

function openInstruction() {
  updateInstructionScreen();
  showScreen('instruction');
}

function openObservations() {
  editingObservationId = null;
  observationFeedback = '';
  observationText.value = '';
  updateObservationsScreen();
  showScreen('observations');
}

function editObservation(id) {
  const observation = getObservations().find((item) => item.id === id);
  if (!observation) return;
  editingObservationId = id;
  observationFeedback = '';
  observationText.value = observation.text;
  updateObservationsScreen();
  observationText.focus();
}

function cancelObservationEdit() {
  editingObservationId = null;
  observationFeedback = '';
  observationText.value = '';
  updateObservationsScreen();
}

function submitObservation() {
  const copy = uiCopy[currentLanguage];
  const text = observationText.value.trim();
  if (!text) {
    observationFeedback = copy.observationTextRequired;
    observationFeedbackType = 'error';
    updateObservationsScreen();
    return;
  }

  const observations = getObservations();
  const timestamp = new Date().toISOString();
  const isEditing = Boolean(editingObservationId);
  const nextObservations = isEditing
    ? observations.map((observation) => observation.id === editingObservationId
      ? { ...observation, text, updatedAt: timestamp }
      : observation)
    : [{ id: createObservationId(), text, createdAt: timestamp, updatedAt: timestamp }, ...observations];

  if (!saveObservations(nextObservations)) {
    observationFeedback = copy.observationsStorageError;
    observationFeedbackType = 'error';
    updateObservationsScreen();
    return;
  }

  editingObservationId = null;
  observationText.value = '';
  observationFeedback = isEditing ? copy.observationUpdated : copy.observationSaved;
  observationFeedbackType = 'success';
  updateObservationsScreen();
}

function deleteObservation(id) {
  const copy = uiCopy[currentLanguage];
  const nextObservations = getObservations().filter((observation) => observation.id !== id);
  if (!saveObservations(nextObservations)) {
    observationFeedback = copy.observationsStorageError;
    observationFeedbackType = 'error';
    updateObservationsScreen();
    return;
  }

  if (editingObservationId === id) {
    editingObservationId = null;
    observationText.value = '';
  }
  observationFeedback = copy.observationDeleted;
  observationFeedbackType = 'success';
  updateObservationsScreen();
}

function getCounterValue(value) {
  return Number.isInteger(value) && value >= 0 ? value : null;
}

function getNonviolenceCounters(dateKey) {
  const savedCounters = getEntry(dateKey)?.nonviolence;
  return {
    thoughts: getCounterValue(savedCounters?.thoughts),
    words: getCounterValue(savedCounters?.words),
    actions: getCounterValue(savedCounters?.actions),
  };
}

function getTruthfulnessCounters(dateKey) {
  const savedCounters = getEntry(dateKey)?.truthfulness;
  return TRUTHFULNESS_FIELDS.reduce((counters, field) => {
    counters[field] = getCounterValue(savedCounters?.[field]);
    return counters;
  }, {});
}

function getChastityCounters(dateKey) {
  const savedCounters = getEntry(dateKey)?.chastity;
  return CHASTITY_FIELDS.reduce((counters, field) => {
    counters[field] = getCounterValue(savedCounters?.[field]);
    return counters;
  }, {});
}

function getLoveAllBeingsCounters(dateKey) {
  const savedCounters = getEntry(dateKey)?.loveAllBeings;
  return LOVE_ALL_BEINGS_FIELDS.reduce((counters, field) => {
    counters[field] = getCounterValue(savedCounters?.[field]);
    return counters;
  }, {});
}

function getDailyChoices(dateKey) {
  const entry = getEntry(dateKey);
  return DAILY_CHOICE_FIELDS.reduce((choices, field) => {
    const value = entry?.[field];
    choices[field] = value === 'yes' || value === 'no' ? value : null;
    return choices;
  }, {});
}

function getMeditationCounters(dateKey) {
  const entry = getEntry(dateKey);
  return MEDITATION_FIELDS.reduce((counters, field) => {
    counters[field] = getCounterValue(entry?.[field]) ?? 0;
    return counters;
  }, {});
}

function isNonviolenceEditable() {
  return activeNonviolenceDate === getTodayKey();
}

function isTruthfulnessEditable() {
  return activeTruthfulnessDate === getTodayKey();
}

function isChastityEditable() {
  return activeChastityDate === getTodayKey();
}

function isLoveAllBeingsEditable() {
  return activeLoveAllBeingsDate === getTodayKey();
}

function isDailyChoicesEditable() {
  return activeDailyChoicesDate === getTodayKey();
}

function isMeditationEditable() {
  return activeMeditationDate === getTodayKey();
}

function clearNonviolenceSaveFeedbackTimer() {
  if (nonviolenceSaveFeedbackTimer) window.clearTimeout(nonviolenceSaveFeedbackTimer);
  nonviolenceSaveFeedbackTimer = null;
}

function clearTruthfulnessSaveFeedbackTimer() {
  if (truthfulnessSaveFeedbackTimer) window.clearTimeout(truthfulnessSaveFeedbackTimer);
  truthfulnessSaveFeedbackTimer = null;
}

function clearChastitySaveFeedbackTimer() {
  if (chastitySaveFeedbackTimer) window.clearTimeout(chastitySaveFeedbackTimer);
  chastitySaveFeedbackTimer = null;
}

function clearLoveAllBeingsSaveFeedbackTimer() {
  if (loveAllBeingsSaveFeedbackTimer) window.clearTimeout(loveAllBeingsSaveFeedbackTimer);
  loveAllBeingsSaveFeedbackTimer = null;
}

function clearDailyChoicesSaveFeedbackTimer() {
  if (dailyChoicesSaveFeedbackTimer) window.clearTimeout(dailyChoicesSaveFeedbackTimer);
  dailyChoicesSaveFeedbackTimer = null;
}

function clearMeditationSaveFeedbackTimer() {
  if (meditationSaveFeedbackTimer) window.clearTimeout(meditationSaveFeedbackTimer);
  meditationSaveFeedbackTimer = null;
}

function scheduleNonviolenceSavedFeedback() {
  clearNonviolenceSaveFeedbackTimer();
  nonviolenceSaveFeedbackTimer = window.setTimeout(() => {
    if (nonviolenceSaveState !== 'auto-saved') return;
    nonviolenceSaveState = 'persisted';
    updateNonviolenceScreen();
  }, 1800);
}

function scheduleTruthfulnessSavedFeedback() {
  clearTruthfulnessSaveFeedbackTimer();
  truthfulnessSaveFeedbackTimer = window.setTimeout(() => {
    if (truthfulnessSaveState !== 'auto-saved') return;
    truthfulnessSaveState = 'persisted';
    updateTruthfulnessScreen();
  }, 1800);
}

function scheduleChastitySavedFeedback() {
  clearChastitySaveFeedbackTimer();
  chastitySaveFeedbackTimer = window.setTimeout(() => {
    if (chastitySaveState !== 'auto-saved') return;
    chastitySaveState = 'persisted';
    updateChastityScreen();
  }, 1800);
}

function scheduleLoveAllBeingsSavedFeedback() {
  clearLoveAllBeingsSaveFeedbackTimer();
  loveAllBeingsSaveFeedbackTimer = window.setTimeout(() => {
    if (loveAllBeingsSaveState !== 'auto-saved') return;
    loveAllBeingsSaveState = 'persisted';
    updateLoveAllBeingsScreen();
  }, 1800);
}

function scheduleDailyChoicesSavedFeedback() {
  clearDailyChoicesSaveFeedbackTimer();
  dailyChoicesSaveFeedbackTimer = window.setTimeout(() => {
    if (dailyChoicesSaveState !== 'auto-saved') return;
    dailyChoicesSaveState = 'persisted';
    updateDailyChoicesScreen();
  }, 1800);
}

function scheduleMeditationSavedFeedback() {
  clearMeditationSaveFeedbackTimer();
  meditationSaveFeedbackTimer = window.setTimeout(() => {
    if (meditationSaveState !== 'auto-saved') return;
    meditationSaveState = 'persisted';
    updateMeditationScreen();
  }, 1800);
}

function saveNonviolenceCounter(dateKey, field, value) {
  if (dateKey !== getTodayKey()) return false;
  const journalData = getJournalData();
  if (!journalData) return false;

  const existingEntry = journalData.entries[dateKey];
  const existingCounters = existingEntry?.nonviolence && typeof existingEntry.nonviolence === 'object'
    ? existingEntry.nonviolence
    : {};
  const timestamp = new Date().toISOString();
  journalData.entries[dateKey] = {
    ...existingEntry,
    text: typeof existingEntry?.text === 'string' ? existingEntry.text : '',
    createdAt: existingEntry?.createdAt || timestamp,
    updatedAt: timestamp,
    nonviolence: { ...existingCounters, [field]: value },
  };

  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalData));
    return true;
  } catch {
    return false;
  }
}

function saveTruthfulnessCounter(dateKey, field, value) {
  if (dateKey !== getTodayKey()) return false;
  const journalData = getJournalData();
  if (!journalData) return false;

  const existingEntry = journalData.entries[dateKey];
  const existingCounters = existingEntry?.truthfulness && typeof existingEntry.truthfulness === 'object'
    ? existingEntry.truthfulness
    : {};
  const timestamp = new Date().toISOString();
  journalData.entries[dateKey] = {
    ...existingEntry,
    text: typeof existingEntry?.text === 'string' ? existingEntry.text : '',
    createdAt: existingEntry?.createdAt || timestamp,
    updatedAt: timestamp,
    truthfulness: { ...existingCounters, [field]: value },
  };

  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalData));
    return true;
  } catch {
    return false;
  }
}

function saveChastityCounter(dateKey, field, value) {
  if (dateKey !== getTodayKey()) return false;
  const journalData = getJournalData();
  if (!journalData) return false;

  const existingEntry = journalData.entries[dateKey];
  const existingCounters = existingEntry?.chastity && typeof existingEntry.chastity === 'object'
    ? existingEntry.chastity
    : {};
  const timestamp = new Date().toISOString();
  journalData.entries[dateKey] = {
    ...existingEntry,
    text: typeof existingEntry?.text === 'string' ? existingEntry.text : '',
    createdAt: existingEntry?.createdAt || timestamp,
    updatedAt: timestamp,
    chastity: { ...existingCounters, [field]: value },
  };

  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalData));
    return true;
  } catch {
    return false;
  }
}

function saveLoveAllBeingsCounter(dateKey, field, value) {
  if (dateKey !== getTodayKey()) return false;
  const journalData = getJournalData();
  if (!journalData) return false;

  const existingEntry = journalData.entries[dateKey];
  const existingCounters = existingEntry?.loveAllBeings && typeof existingEntry.loveAllBeings === 'object'
    ? existingEntry.loveAllBeings
    : {};
  const timestamp = new Date().toISOString();
  journalData.entries[dateKey] = {
    ...existingEntry,
    text: typeof existingEntry?.text === 'string' ? existingEntry.text : '',
    createdAt: existingEntry?.createdAt || timestamp,
    updatedAt: timestamp,
    loveAllBeings: { ...existingCounters, [field]: value },
  };

  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalData));
    return true;
  } catch {
    return false;
  }
}

function saveDailyChoice(dateKey, field, value) {
  if (dateKey !== getTodayKey() || !DAILY_CHOICE_FIELDS.includes(field)) return false;
  const journalData = getJournalData();
  if (!journalData) return false;

  const existingEntry = journalData.entries[dateKey];
  const timestamp = new Date().toISOString();
  journalData.entries[dateKey] = {
    ...existingEntry,
    text: typeof existingEntry?.text === 'string' ? existingEntry.text : '',
    createdAt: existingEntry?.createdAt || timestamp,
    updatedAt: timestamp,
    [field]: value,
  };

  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalData));
    return true;
  } catch {
    return false;
  }
}

function saveMeditationCounter(dateKey, field, value) {
  if (dateKey !== getTodayKey() || !MEDITATION_FIELDS.includes(field) || !Number.isInteger(value) || value < 0) return false;
  const journalData = getJournalData();
  if (!journalData) return false;

  const existingEntry = journalData.entries[dateKey];
  const timestamp = new Date().toISOString();
  journalData.entries[dateKey] = {
    ...existingEntry,
    text: typeof existingEntry?.text === 'string' ? existingEntry.text : '',
    createdAt: existingEntry?.createdAt || timestamp,
    updatedAt: timestamp,
    [field]: value,
  };

  try {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalData));
    return true;
  } catch {
    return false;
  }
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, screen]) => {
    screen.hidden = name !== screenName;
  });
}

function formatMonth(monthKey) {
  const [year, month] = monthKey.split('-').map(Number);
  return new Intl.DateTimeFormat(uiCopy[currentLanguage].dateLocale, {
    month: 'long', year: 'numeric',
  }).format(new Date(year, month - 1, 1, 12));
}

function getDaysInMonth(monthKey) {
  const [year, month] = monthKey.split('-').map(Number);
  const dayCount = new Date(year, month, 0).getDate();
  return Array.from({ length: dayCount }, (_, index) => `${monthKey}-${String(index + 1).padStart(2, '0')}`);
}

function getHistoryMonthKeys() {
  const journalData = getJournalData();
  const savedMonths = Object.keys(journalData?.entries || {})
    .filter((dateKey) => /^\d{4}-\d{2}-\d{2}$/.test(dateKey))
    .map((dateKey) => dateKey.slice(0, 7));
  return [...new Set([getTodayKey().slice(0, 7), ...savedMonths])]
    .sort((first, second) => second.localeCompare(first));
}

function getHistoryEntry(dateKey) {
  return getEntry(dateKey);
}

function getHistoryDateKeys(monthKey) {
  const currentMonth = getTodayKey().slice(0, 7);
  if (monthKey !== currentMonth) return getDaysInMonth(monthKey);

  const latestAllowedDate = monthKey === currentMonth ? getTodayKey() : '9999-12-31';
  return Object.keys(getJournalData()?.entries || {})
    .filter((dateKey) => dateKey.startsWith(`${monthKey}-`) && dateKey <= latestAllowedDate)
    .sort();
}

function formatHistoryValue(value) {
  const counterValue = getCounterValue(value);
  return counterValue === null ? '—' : String(counterValue);
}

function formatHistoryChoice(value, copy) {
  if (value === 'yes') return copy.dailyChoicesYes;
  if (value === 'no') return copy.dailyChoicesNo;
  return '—';
}

function getHistoryMatrixGroups(copy) {
  const counterRows = (fields, labels, entryKey) => fields.map((field) => ({
    label: labels[field],
    value: (entry) => formatHistoryValue(entry?.[entryKey]?.[field]),
  }));

  return [
    {
      title: copy.nonviolenceTitle,
      rows: counterRows(NONVIOLENCE_FIELDS, copy.nonviolenceCounters, 'nonviolence'),
    },
    {
      title: copy.truthfulnessTitle,
      rows: counterRows(TRUTHFULNESS_FIELDS, copy.truthfulnessCounters, 'truthfulness'),
    },
    {
      title: copy.chastityTitle,
      rows: counterRows(CHASTITY_FIELDS, copy.chastityCounters, 'chastity'),
    },
    {
      title: copy.loveAllBeingsTitle,
      rows: counterRows(LOVE_ALL_BEINGS_FIELDS, copy.loveAllBeingsCounters, 'loveAllBeings'),
    },
    {
      title: copy.vegetarianFoodTitle,
      value: (entry) => formatHistoryChoice(entry?.vegetarianFood, copy),
      rows: [],
    },
    {
      title: copy.selflessServiceTitle,
      value: (entry) => formatHistoryChoice(entry?.selflessService, copy),
      rows: [],
    },
    {
      title: copy.meditationTitle,
      rows: MEDITATION_FIELDS.map((field) => ({
        label: copy.meditationCounters[field],
        value: (entry) => formatHistoryValue(entry?.[field]),
      })),
    },
  ];
}

function createHistoryMatrix(dates, copy) {
  const scrollArea = document.createElement('div');
  const table = document.createElement('table');
  const caption = document.createElement('caption');
  const head = document.createElement('thead');
  const headerRow = document.createElement('tr');

  scrollArea.className = 'history-matrix-scroll';
  table.className = 'history-matrix';
  caption.className = 'visually-hidden';
  caption.textContent = `${copy.historyTitle}: ${historyDaysTitle.textContent}`;

  const indicatorHeader = document.createElement('th');
  indicatorHeader.className = 'history-matrix-corner';
  indicatorHeader.scope = 'col';
  indicatorHeader.textContent = copy.historyIndicators;
  headerRow.append(indicatorHeader);

  dates.forEach((dateKey) => {
    const dayHeader = document.createElement('th');
    dayHeader.className = 'history-matrix-day';
    dayHeader.scope = 'col';
    dayHeader.textContent = String(Number(dateKey.slice(-2)));
    headerRow.append(dayHeader);
  });

  head.append(headerRow);
  table.append(caption, head);

  getHistoryMatrixGroups(copy).forEach((group) => {
    const body = document.createElement('tbody');
    const groupRow = document.createElement('tr');
    const groupTitle = document.createElement('th');

    body.className = 'history-matrix-group';
    groupTitle.className = 'history-matrix-group-title';
    groupTitle.scope = 'rowgroup';
    groupTitle.textContent = group.title;
    groupRow.append(groupTitle);
    if (group.value) {
      dates.forEach((dateKey) => {
        const valueCell = document.createElement('td');
        valueCell.className = 'history-matrix-group-value';
        valueCell.textContent = group.value(getHistoryEntry(dateKey));
        groupRow.append(valueCell);
      });
    } else {
      const groupFill = document.createElement('td');
      groupFill.className = 'history-matrix-group-fill';
      groupFill.colSpan = dates.length;
      groupRow.append(groupFill);
    }
    body.append(groupRow);

    group.rows.forEach((row) => {
      const tableRow = document.createElement('tr');
      const rowHeader = document.createElement('th');
      rowHeader.className = 'history-matrix-label';
      rowHeader.scope = 'row';
      rowHeader.textContent = row.label;
      tableRow.append(rowHeader);

      dates.forEach((dateKey) => {
        const valueCell = document.createElement('td');
        valueCell.textContent = row.value(getHistoryEntry(dateKey));
        tableRow.append(valueCell);
      });

      body.append(tableRow);
    });

    table.append(body);
  });

  scrollArea.append(table);
  return scrollArea;
}

function getAnalyticsDateKeys(monthKey) {
  const currentMonth = getTodayKey().slice(0, 7);
  const dates = getDaysInMonth(monthKey);
  return monthKey === currentMonth ? dates.filter((dateKey) => dateKey <= getTodayKey()) : dates;
}

function getPreviousMonthKey(monthKey) {
  const [year, month] = monthKey.split('-').map(Number);
  const previous = new Date(year, month - 2, 1);
  return `${previous.getFullYear()}-${String(previous.getMonth() + 1).padStart(2, '0')}`;
}

function getNumericAnalytics(dateKeys, valueForEntry) {
  const values = dateKeys
    .map((dateKey) => getCounterValue(valueForEntry(getHistoryEntry(dateKey))))
    .filter((value) => value !== null);

  return {
    completed: values.length,
    missed: dateKeys.length - values.length,
    min: values.length ? Math.min(...values) : null,
    max: values.length ? Math.max(...values) : null,
    total: values.length ? values.reduce((sum, value) => sum + value, 0) : null,
  };
}

function getChoiceAnalytics(dateKeys, field) {
  const answers = dateKeys.map((dateKey) => getHistoryEntry(dateKey)?.[field]);
  const yes = answers.filter((value) => value === 'yes').length;
  const no = answers.filter((value) => value === 'no').length;
  return { yes, no, missed: dateKeys.length - yes - no };
}

function formatAnalyticsValue(value) {
  return value === null ? '—' : String(value);
}

function formatPreviousChoiceAnalytics(analytics, copy) {
  if (!analytics.yes && !analytics.no) return '—';
  return `${copy.dailyChoicesYes} ${analytics.yes} / ${copy.dailyChoicesNo} ${analytics.no}`;
}

function getViolationAnalyticsGroups(copy, dates, previousDates) {
  const counterRows = (fields, labels, entryKey) => fields.map((field) => {
    const current = getNumericAnalytics(dates, (entry) => entry?.[entryKey]?.[field]);
    const previous = getNumericAnalytics(previousDates, (entry) => entry?.[entryKey]?.[field]);
    return {
      label: labels[field],
      cells: [
        current.completed,
        current.missed,
        current.max,
        current.min,
        current.total,
        previous.completed ? previous.total : null,
      ].map(formatAnalyticsValue),
    };
  });

  return [
    { title: copy.nonviolenceTitle, rows: counterRows(NONVIOLENCE_FIELDS, copy.nonviolenceCounters, 'nonviolence') },
    { title: copy.truthfulnessTitle, rows: counterRows(TRUTHFULNESS_FIELDS, copy.truthfulnessCounters, 'truthfulness') },
    { title: copy.chastityTitle, rows: counterRows(CHASTITY_FIELDS, copy.chastityCounters, 'chastity') },
    { title: copy.loveAllBeingsTitle, rows: counterRows(LOVE_ALL_BEINGS_FIELDS, copy.loveAllBeingsCounters, 'loveAllBeings') },
  ];
}

function getChoiceAnalyticsRows(copy, dates, previousDates) {
  return DAILY_CHOICE_FIELDS.map((field) => {
    const current = getChoiceAnalytics(dates, field);
    const previous = getChoiceAnalytics(previousDates, field);
    return {
      label: field === 'vegetarianFood' ? copy.vegetarianFoodTitle : copy.selflessServiceTitle,
      cells: [current.yes, current.no, current.missed, formatPreviousChoiceAnalytics(previous, copy)].map(formatAnalyticsValue),
    };
  });
}

function getChoiceAnalyticsSections(copy, dates, previousDates) {
  return getChoiceAnalyticsRows(copy, dates, previousDates).map((row) => ({
    title: row.label,
    cells: row.cells,
    rows: [],
  }));
}

function getMeditationAnalyticsRows(copy, dates, previousDates) {
  return MEDITATION_FIELDS.map((field) => {
    const current = getNumericAnalytics(dates, (entry) => entry?.[field]);
    const previous = getNumericAnalytics(previousDates, (entry) => entry?.[field]);
    return {
      label: copy.meditationCounters[field],
      cells: [
        current.completed,
        current.missed,
        current.min,
        current.max,
        current.total,
        previous.completed ? previous.total : null,
      ].map(formatAnalyticsValue),
    };
  });
}

function createHistoryAnalyticsTable(title, headers, sections) {
  const section = document.createElement('section');
  const sectionTitle = document.createElement('h2');
  const scrollArea = document.createElement('div');
  const table = document.createElement('table');
  const caption = document.createElement('caption');
  const head = document.createElement('thead');
  const headerRow = document.createElement('tr');

  section.className = 'history-analytics-section';
  sectionTitle.className = 'history-analytics-section-title';
  sectionTitle.textContent = title;
  scrollArea.className = 'history-analytics-table-scroll';
  table.className = 'history-analytics-table';
  caption.className = 'visually-hidden';
  caption.textContent = `${title}: ${historyAnalyticsMonth.textContent}`;

  const indicatorHeader = document.createElement('th');
  indicatorHeader.className = 'history-analytics-corner';
  indicatorHeader.scope = 'col';
  indicatorHeader.textContent = uiCopy[currentLanguage].historyIndicators;
  headerRow.append(indicatorHeader);

  headers.forEach((header) => {
    const headerCell = document.createElement('th');
    headerCell.scope = 'col';
    headerCell.textContent = header;
    headerRow.append(headerCell);
  });
  head.append(headerRow);
  table.append(caption, head);

  sections.forEach((section) => {
    const body = document.createElement('tbody');
    if (section.title) {
      const groupRow = document.createElement('tr');
      const groupTitle = document.createElement('th');
      groupTitle.className = 'history-analytics-group-title';
      groupTitle.scope = 'rowgroup';
      groupTitle.textContent = section.title;
      groupRow.append(groupTitle);
      if (section.cells) {
        section.cells.forEach((value) => {
          const valueCell = document.createElement('td');
          valueCell.className = 'history-analytics-group-value';
          valueCell.textContent = value;
          groupRow.append(valueCell);
        });
      } else {
        const groupFill = document.createElement('td');
        groupFill.className = 'history-analytics-group-fill';
        groupFill.colSpan = headers.length;
        groupRow.append(groupFill);
      }
      body.append(groupRow);
    }

    section.rows.forEach((row) => {
      const tableRow = document.createElement('tr');
      const rowHeader = document.createElement('th');
      rowHeader.className = 'history-analytics-label';
      rowHeader.scope = 'row';
      rowHeader.textContent = row.label;
      tableRow.append(rowHeader);
      row.cells.forEach((value) => {
        const valueCell = document.createElement('td');
        valueCell.textContent = value;
        tableRow.append(valueCell);
      });
      body.append(tableRow);
    });

    table.append(body);
  });

  scrollArea.append(table);
  section.append(sectionTitle, scrollArea);
  return section;
}

function updateHistoryMonthsScreen() {
  const copy = uiCopy[currentLanguage];
  const currentMonth = getTodayKey().slice(0, 7);
  historyMonthsBack.textContent = copy.backToMenu;
  historyMonthsKicker.textContent = copy.title;
  historyMonthsTitle.textContent = copy.historyTitle;
  historyMonthList.replaceChildren();

  getHistoryMonthKeys().forEach((monthKey) => {
    const button = document.createElement('button');
    const label = document.createElement('span');
    button.className = 'history-month-button';
    button.type = 'button';
    label.textContent = formatMonth(monthKey);
    button.append(label);
    if (monthKey === currentMonth) {
      const current = document.createElement('span');
      current.className = 'history-current-badge';
      current.textContent = copy.historyCurrentMonth;
      button.classList.add('is-current');
      button.append(current);
    }
    button.addEventListener('click', () => openHistoryMonth(monthKey));
    historyMonthList.append(button);
  });
}

function updateHistoryDaysScreen() {
  if (!selectedHistoryMonth) return;
  const copy = uiCopy[currentLanguage];
  const currentMonth = getTodayKey().slice(0, 7);
  const dates = getHistoryDateKeys(selectedHistoryMonth);
  historyDaysBack.textContent = copy.historyBackToMonths;
  historyDaysKicker.textContent = copy.title;
  historyDaysTitle.textContent = formatMonth(selectedHistoryMonth);
  historyCurrentLabel.textContent = copy.historyCurrentMonth;
  historyCurrentLabel.hidden = selectedHistoryMonth !== currentMonth;
  historyAnalyticsButton.textContent = copy.historyShowAnalytics;
  historyDayList.replaceChildren();

  if (!dates.length) {
    const message = document.createElement('p');
    message.className = 'history-empty-message';
    message.textContent = copy.historyNoEntries;
    historyDayList.append(message);
    return;
  }

  historyDayList.append(createHistoryMatrix(dates, copy));
}

function updateHistoryAnalyticsScreen() {
  if (!selectedHistoryMonth) return;
  const copy = uiCopy[currentLanguage];
  const dates = getAnalyticsDateKeys(selectedHistoryMonth);
  const previousDates = getAnalyticsDateKeys(getPreviousMonthKey(selectedHistoryMonth));
  const numericHeaders = [
    copy.historyAnalyticsFilled,
    copy.historyAnalyticsMissed,
    copy.historyAnalyticsMax,
    copy.historyAnalyticsMin,
    copy.historyAnalyticsTotal,
    copy.historyAnalyticsPrevious,
  ];

  historyAnalyticsBack.textContent = copy.historyAnalyticsBack;
  historyAnalyticsKicker.textContent = copy.title;
  historyAnalyticsTitle.textContent = copy.historyAnalyticsTitle;
  historyAnalyticsMonth.textContent = formatMonth(selectedHistoryMonth);
  historyAnalyticsList.replaceChildren();

  historyAnalyticsList.append(
    createHistoryAnalyticsTable(
      copy.historyAnalyticsViolations,
      numericHeaders,
      getViolationAnalyticsGroups(copy, dates, previousDates),
    ),
    createHistoryAnalyticsTable(
      copy.historyAnalyticsChoices,
      [copy.dailyChoicesYes, copy.dailyChoicesNo, copy.historyAnalyticsMissed, copy.historyAnalyticsPrevious],
      getChoiceAnalyticsSections(copy, dates, previousDates),
    ),
    createHistoryAnalyticsTable(
      copy.historyAnalyticsMeditation,
      [
        copy.historyAnalyticsFilled,
        copy.historyAnalyticsMissed,
        copy.historyAnalyticsMin,
        copy.historyAnalyticsMax,
        copy.historyAnalyticsTotal,
        copy.historyAnalyticsPrevious,
      ],
      [{ rows: getMeditationAnalyticsRows(copy, dates, previousDates) }],
    ),
  );
}

function openHistoryMonths() {
  selectedHistoryMonth = null;
  updateHistoryMonthsScreen();
  showScreen('historyMonths');
}

function openHistoryMonth(monthKey) {
  selectedHistoryMonth = monthKey;
  updateHistoryDaysScreen();
  showScreen('historyDays');
}

function openHistoryAnalytics() {
  if (!selectedHistoryMonth) return;
  updateHistoryAnalyticsScreen();
  showScreen('historyAnalytics');
}

function updateDateNotice() {
  const copy = uiCopy[currentLanguage];
  if (!noticeDate) {
    dateNotice.hidden = true;
    createDateEntry.hidden = true;
    return;
  }
  dateNotice.textContent = copy.noEntry.replace('{date}', formatDate(noticeDate));
  dateNotice.hidden = false;
  createDateEntry.textContent = copy.startEntry;
  createDateEntry.hidden = false;
}

function updateEditorDetails() {
  const copy = uiCopy[currentLanguage];
  editorDate.textContent = activeDate ? formatDate(activeDate) : '';
  entryText.placeholder = copy.entryPlaceholder;
}

function updateSaveStatus() {
  const copy = uiCopy[currentLanguage];
  saveStatus.textContent = saveState === 'saved' ? copy.saved : saveState === 'error' ? copy.storageError : '';
}

function updateBlockSelection() {
  if (!selectedBlock) {
    blockSelection.hidden = true;
    return;
  }
  const copy = uiCopy[currentLanguage];
  blockSelection.textContent = copy.blockSelected.replace('{block}', copy.blocks[selectedBlock]);
  blockSelection.hidden = false;
}

function updateNonviolenceSaveStatus(copy, counters) {
  const hasSavedCounters = NONVIOLENCE_FIELDS.some((field) => counters[field] !== null);
  let status = '';

  if (nonviolenceSaveState === 'saving') status = copy.nonviolenceSaving;
  if (nonviolenceSaveState === 'auto-saved') status = `${copy.nonviolenceAutoSaved} · ${copy.nonviolenceSaved}`;
  if (nonviolenceSaveState === 'persisted' || (nonviolenceSaveState === 'idle' && hasSavedCounters)) status = copy.nonviolenceSaved;
  if (nonviolenceSaveState === 'error') status = copy.nonviolenceStorageError;

  nonviolenceSaveStatus.textContent = status;
  nonviolenceSaveStatus.hidden = !status;
  nonviolenceSaveStatus.classList.toggle('is-error', nonviolenceSaveState === 'error');
  nonviolenceRetry.textContent = copy.retry;
  nonviolenceRetry.hidden = nonviolenceSaveState !== 'error' || !pendingNonviolenceChange;
}

function updateNonviolenceScreen() {
  if (!activeNonviolenceDate) return;
  const copy = uiCopy[currentLanguage];
  const counters = getNonviolenceCounters(activeNonviolenceDate);
  const editable = isNonviolenceEditable();
  const incompleteFields = NONVIOLENCE_FIELDS.filter((field) => counters[field] === null);
  const filledCount = NONVIOLENCE_FIELDS.length - incompleteFields.length;
  nonviolenceDate.textContent = formatDate(activeNonviolenceDate);
  nonviolenceReadOnly.textContent = copy.nonviolenceReadOnly;
  nonviolenceReadOnly.hidden = editable;
  nonviolenceProgress.textContent = copy.nonviolenceProgress.replace('{filled}', filledCount);
  if (incompleteFields.length === NONVIOLENCE_FIELDS.length) {
    nonviolenceReminder.textContent = copy.nonviolenceStartReminder;
    nonviolenceReminder.hidden = false;
  } else if (incompleteFields.length) {
    const fields = incompleteFields.map((field) => copy.nonviolenceCounters[field]).join(', ');
    nonviolenceReminder.textContent = copy.nonviolenceRemaining.replace('{fields}', fields);
    nonviolenceReminder.hidden = false;
  } else {
    nonviolenceReminder.textContent = '';
    nonviolenceReminder.hidden = true;
  }
  updateNonviolenceSaveStatus(copy, counters);
  nonviolenceBack.textContent = copy.allBlocks;
  nonviolenceNextLabel.textContent = copy.nextBlock;
  nonviolenceNextNotice.textContent = nonviolenceNextNoticeVisible ? copy.nextBlockMessage : '';
  counterValues.forEach((output) => {
    const value = counters[output.dataset.counterValue];
    output.textContent = value === null ? '—' : String(value);
  });
  counterButtons.forEach((button) => {
    const field = button.dataset.nonviolenceField;
    const label = copy.nonviolenceCounters[field];
    const action = button.dataset.counterAction;
    button.disabled = !editable;
    if (action === 'zero') button.textContent = copy.noViolations;
    else button.setAttribute('aria-label', (action === 'increase' ? copy.increaseCounter : copy.decreaseCounter).replace('{label}', label));
  });
}

function updateTruthfulnessSaveStatus(copy, counters) {
  const hasSavedCounters = TRUTHFULNESS_FIELDS.some((field) => counters[field] !== null);
  let status = '';

  if (truthfulnessSaveState === 'saving') status = copy.nonviolenceSaving;
  if (truthfulnessSaveState === 'auto-saved') status = `${copy.nonviolenceAutoSaved} · ${copy.nonviolenceSaved}`;
  if (truthfulnessSaveState === 'persisted' || (truthfulnessSaveState === 'idle' && hasSavedCounters)) status = copy.nonviolenceSaved;
  if (truthfulnessSaveState === 'error') status = copy.nonviolenceStorageError;

  truthfulnessSaveStatus.textContent = status;
  truthfulnessSaveStatus.hidden = !status;
  truthfulnessSaveStatus.classList.toggle('is-error', truthfulnessSaveState === 'error');
  truthfulnessRetry.textContent = copy.retry;
  truthfulnessRetry.hidden = truthfulnessSaveState !== 'error' || !pendingTruthfulnessChange;
}

function updateTruthfulnessScreen() {
  if (!activeTruthfulnessDate) return;
  const copy = uiCopy[currentLanguage];
  const counters = getTruthfulnessCounters(activeTruthfulnessDate);
  const editable = isTruthfulnessEditable();
  const incompleteFields = TRUTHFULNESS_FIELDS.filter((field) => counters[field] === null);
  const filledCount = TRUTHFULNESS_FIELDS.length - incompleteFields.length;

  truthfulnessDate.textContent = formatDate(activeTruthfulnessDate);
  truthfulnessReadOnly.textContent = copy.truthfulnessReadOnly;
  truthfulnessReadOnly.hidden = editable;
  truthfulnessProgress.textContent = copy.truthfulnessProgress.replace('{filled}', filledCount);
  updateTruthfulnessSaveStatus(copy, counters);
  truthfulnessBack.textContent = copy.allBlocks;
  truthfulnessNextLabel.textContent = copy.nextBlock;
  truthfulnessNextNotice.textContent = truthfulnessNextNoticeVisible ? copy.nextBlockMessage : '';
  truthfulnessValues.forEach((output) => {
    const value = counters[output.dataset.truthfulnessValue];
    output.textContent = value === null ? '—' : String(value);
  });
  truthfulnessButtons.forEach((button) => {
    const field = button.dataset.truthfulnessField;
    const label = copy.truthfulnessCounters[field];
    const action = button.dataset.truthfulnessAction;
    button.disabled = !editable;
    if (action === 'zero') {
      button.textContent = copy.noViolations;
      button.setAttribute('aria-label', `${copy.noViolations}: ${label}`);
    } else {
      button.setAttribute('aria-label', (action === 'increase' ? copy.increaseCounter : copy.decreaseCounter)
        .replace('{label}', label));
    }
  });
}

function updateChastitySaveStatus(copy, counters) {
  const hasSavedCounters = CHASTITY_FIELDS.some((field) => counters[field] !== null);
  let status = '';

  if (chastitySaveState === 'saving') status = copy.nonviolenceSaving;
  if (chastitySaveState === 'auto-saved') status = `${copy.nonviolenceAutoSaved} · ${copy.nonviolenceSaved}`;
  if (chastitySaveState === 'persisted' || (chastitySaveState === 'idle' && hasSavedCounters)) status = copy.nonviolenceSaved;
  if (chastitySaveState === 'error') status = copy.nonviolenceStorageError;

  chastitySaveStatus.textContent = status;
  chastitySaveStatus.hidden = !status;
  chastitySaveStatus.classList.toggle('is-error', chastitySaveState === 'error');
  chastityRetry.textContent = copy.retry;
  chastityRetry.hidden = chastitySaveState !== 'error' || !pendingChastityChange;
}

function updateChastityScreen() {
  if (!activeChastityDate) return;
  const copy = uiCopy[currentLanguage];
  const counters = getChastityCounters(activeChastityDate);
  const editable = isChastityEditable();
  const filledCount = CHASTITY_FIELDS.filter((field) => counters[field] !== null).length;

  chastityDate.textContent = formatDate(activeChastityDate);
  chastityReadOnly.textContent = copy.chastityReadOnly;
  chastityReadOnly.hidden = editable;
  chastityProgress.textContent = copy.chastityProgress.replace('{filled}', filledCount);
  updateChastitySaveStatus(copy, counters);
  chastityBack.textContent = copy.allBlocks;
  chastityNextLabel.textContent = copy.nextBlock;
  chastityNextNotice.textContent = chastityNextNoticeVisible ? copy.nextBlockMessage : '';
  chastityValues.forEach((output) => {
    const value = counters[output.dataset.chastityValue];
    output.textContent = value === null ? '—' : String(value);
  });
  chastityButtons.forEach((button) => {
    const field = button.dataset.chastityField;
    const label = copy.chastityCounters[field];
    const action = button.dataset.chastityAction;
    button.disabled = !editable;
    if (action === 'zero') {
      button.textContent = copy.noViolations;
      button.setAttribute('aria-label', `${copy.noViolations}: ${label}`);
    } else {
      button.setAttribute('aria-label', (action === 'increase' ? copy.increaseCounter : copy.decreaseCounter)
        .replace('{label}', label));
    }
  });
}

function updateLoveAllBeingsSaveStatus(copy, counters) {
  const hasSavedCounters = LOVE_ALL_BEINGS_FIELDS.some((field) => counters[field] !== null);
  let status = '';

  if (loveAllBeingsSaveState === 'saving') status = copy.nonviolenceSaving;
  if (loveAllBeingsSaveState === 'auto-saved') status = `${copy.nonviolenceAutoSaved} · ${copy.nonviolenceSaved}`;
  if (loveAllBeingsSaveState === 'persisted' || (loveAllBeingsSaveState === 'idle' && hasSavedCounters)) status = copy.nonviolenceSaved;
  if (loveAllBeingsSaveState === 'error') status = copy.nonviolenceStorageError;

  loveAllBeingsSaveStatus.textContent = status;
  loveAllBeingsSaveStatus.hidden = !status;
  loveAllBeingsSaveStatus.classList.toggle('is-error', loveAllBeingsSaveState === 'error');
  loveAllBeingsRetry.textContent = copy.retry;
  loveAllBeingsRetry.hidden = loveAllBeingsSaveState !== 'error' || !pendingLoveAllBeingsChange;
}

function updateLoveAllBeingsScreen() {
  if (!activeLoveAllBeingsDate) return;
  const copy = uiCopy[currentLanguage];
  const counters = getLoveAllBeingsCounters(activeLoveAllBeingsDate);
  const editable = isLoveAllBeingsEditable();
  const filledCount = LOVE_ALL_BEINGS_FIELDS.filter((field) => counters[field] !== null).length;

  loveAllBeingsDate.textContent = formatDate(activeLoveAllBeingsDate);
  loveAllBeingsReadOnly.textContent = copy.loveAllBeingsReadOnly;
  loveAllBeingsReadOnly.hidden = editable;
  loveAllBeingsProgress.textContent = copy.loveAllBeingsProgress.replace('{filled}', filledCount);
  updateLoveAllBeingsSaveStatus(copy, counters);
  loveAllBeingsBack.textContent = copy.allBlocks;
  loveAllBeingsNextLabel.textContent = copy.nextBlock;
  loveAllBeingsNextNotice.textContent = loveAllBeingsNextNoticeVisible ? copy.nextBlockMessage : '';
  loveAllBeingsValues.forEach((output) => {
    const value = counters[output.dataset.loveAllBeingsValue];
    output.textContent = value === null ? '—' : String(value);
  });
  loveAllBeingsButtons.forEach((button) => {
    const field = button.dataset.loveAllBeingsField;
    const label = copy.loveAllBeingsCounters[field];
    const action = button.dataset.loveAllBeingsAction;
    button.disabled = !editable;
    if (action === 'zero') {
      button.textContent = copy.noViolations;
      button.setAttribute('aria-label', `${copy.noViolations}: ${label}`);
    } else {
      button.setAttribute('aria-label', (action === 'increase' ? copy.increaseCounter : copy.decreaseCounter)
        .replace('{label}', label));
    }
  });
}

function updateDailyChoicesScreen() {
  if (!activeDailyChoicesDate) return;
  const copy = uiCopy[currentLanguage];
  const choices = getDailyChoices(activeDailyChoicesDate);
  const editable = isDailyChoicesEditable();
  const hasSavedChoices = DAILY_CHOICE_FIELDS.some((field) => choices[field] !== null);
  let saveStatus = '';

  if (dailyChoicesSaveState === 'auto-saved') saveStatus = `${copy.nonviolenceAutoSaved} · ${copy.nonviolenceSaved}`;
  if (dailyChoicesSaveState === 'persisted' || (dailyChoicesSaveState === 'idle' && hasSavedChoices)) saveStatus = copy.nonviolenceSaved;
  if (dailyChoicesSaveState === 'error') saveStatus = copy.nonviolenceStorageError;

  dailyChoicesDate.textContent = formatDate(activeDailyChoicesDate);
  dailyChoicesReadOnly.textContent = copy.dailyChoicesReadOnly;
  dailyChoicesReadOnly.hidden = editable;
  dailyChoicesSaveStatus.textContent = saveStatus;
  dailyChoicesSaveStatus.hidden = !saveStatus;
  dailyChoicesSaveStatus.classList.toggle('is-error', dailyChoicesSaveState === 'error');
  dailyChoicesBack.textContent = copy.allBlocks;
  dailyChoicesNextLabel.textContent = copy.nextBlock;
  dailyChoicesNextNotice.textContent = dailyChoicesNextNoticeVisible ? copy.nextBlockMessage : '';
  dailyChoiceButtons.forEach((button) => {
    const field = button.dataset.dailyChoiceSection;
    const value = button.dataset.dailyChoiceValue;
    const selected = choices[field] === value;
    button.textContent = value === 'yes' ? copy.dailyChoicesYes : copy.dailyChoicesNo;
    button.disabled = !editable;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function updateMeditationScreen() {
  if (!activeMeditationDate) return;
  const copy = uiCopy[currentLanguage];
  const counters = getMeditationCounters(activeMeditationDate);
  const editable = isMeditationEditable();
  const entry = getEntry(activeMeditationDate);
  const hasSavedCounters = MEDITATION_FIELDS.some((field) => getCounterValue(entry?.[field]) !== null);
  let saveStatus = '';

  if (meditationSaveState === 'auto-saved') saveStatus = `${copy.nonviolenceAutoSaved} · ${copy.nonviolenceSaved}`;
  if (meditationSaveState === 'persisted' || (meditationSaveState === 'idle' && hasSavedCounters)) saveStatus = copy.nonviolenceSaved;
  if (meditationSaveState === 'error') saveStatus = copy.nonviolenceStorageError;

  meditationDate.textContent = formatDate(activeMeditationDate);
  meditationReadOnly.textContent = copy.meditationReadOnly;
  meditationReadOnly.hidden = editable;
  meditationSaveStatus.textContent = saveStatus;
  meditationSaveStatus.hidden = !saveStatus;
  meditationSaveStatus.classList.toggle('is-error', meditationSaveState === 'error');
  meditationBack.textContent = copy.allBlocks;
  meditationValues.forEach((output) => {
    output.textContent = String(counters[output.dataset.meditationValue]);
  });
  meditationUnits.forEach((unit) => {
    unit.textContent = copy.meditationHours;
  });
  meditationButtons.forEach((button) => {
    const field = button.dataset.meditationField;
    const action = button.dataset.meditationAction;
    const label = copy.meditationCounters[field];
    button.disabled = !editable;
    button.setAttribute('aria-label', (action === 'increase' ? copy.increaseMeditation : copy.decreaseMeditation)
      .replace('{label}', label));
  });
}

function applyLanguage(language) {
  const copy = uiCopy[language];
  currentLanguage = language;
  document.documentElement.lang = copy.htmlLang;
  document.title = `${copy.title} — ${copy.subtitle}`;
  description.content = copy.pageDescription;
  title.textContent = copy.title;
  subtitle.textContent = copy.subtitle;
  startLabel.textContent = copy.begin;
  startButton.setAttribute('aria-label', `${copy.begin} →`);
  menuBack.textContent = copy.menuBack;
  blocksBack.textContent = copy.backToMenu;
  nonviolenceBack.textContent = copy.backToBlocks;
  dateBack.textContent = copy.backToMenu;
  editorBack.textContent = copy.backToMenu;
  menuKicker.textContent = copy.title;
  menuGreeting.textContent = copy.firstStep;
  continueButton.textContent = copy.continueEntries;
  previousButton.textContent = copy.editPrevious;
  instructionButton.textContent = `${copy.instructionButton} →`;
  observationsButton.textContent = copy.observationsButton;
  blocksKicker.textContent = copy.title;
  journalBlockButtons.forEach((button) => {
    button.textContent = copy.blocks[button.dataset.journalBlock];
  });
  nonviolenceKicker.textContent = copy.title;
  nonviolenceTitle.textContent = copy.nonviolenceTitle;
  nonviolenceCounterLabels.forEach((label) => {
    const field = label.id.replace('counter-', '').replace('-label', '');
    label.textContent = copy.nonviolenceCounters[field];
  });
  truthfulnessKicker.textContent = copy.title;
  truthfulnessTitle.textContent = copy.truthfulnessTitle;
  truthfulnessCounterLabels.forEach((label) => {
    const field = label.id
      .replace('truthfulness-counter-', '')
      .replace('-label', '')
      .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    label.textContent = copy.truthfulnessCounters[field];
  });
  chastityKicker.textContent = copy.title;
  chastityTitle.textContent = copy.chastityTitle;
  chastityCounterLabels.forEach((label) => {
    const field = label.id.replace('chastity-counter-', '').replace('-label', '');
    label.textContent = copy.chastityCounters[field];
  });
  loveAllBeingsKicker.textContent = copy.title;
  loveAllBeingsTitle.textContent = copy.loveAllBeingsTitle;
  loveAllBeingsCounterLabels.forEach((label) => {
    const field = label.id
      .replace('love-all-beings-counter-', '')
      .replace('-label', '')
      .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    label.textContent = copy.loveAllBeingsCounters[field];
  });
  dailyChoicesKicker.textContent = copy.title;
  vegetarianFoodTitle.textContent = copy.vegetarianFoodTitle;
  selflessServiceTitle.textContent = copy.selflessServiceTitle;
  meditationKicker.textContent = copy.title;
  meditationTitle.textContent = copy.meditationTitle;
  meditationCounterLabels.forEach((label) => {
    label.textContent = copy.meditationCounters[label.dataset.meditationLabel];
  });
  dateKicker.textContent = copy.title;
  dateTitle.textContent = copy.selectDate;
  dateLabel.textContent = copy.dateLabel;
  dateConfirm.textContent = copy.openEntry;
  editorKicker.textContent = copy.title;
  editorTitle.textContent = copy.entryTitle;
  entryTextLabel.textContent = copy.entryTextLabel;
  saveEntry.textContent = copy.save;
  languageSwitches.forEach((languageSwitch) => languageSwitch.setAttribute('aria-label', copy.languageLabel));
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  updateDateNotice();
  updateEditorDetails();
  updateSaveStatus();
  updateBlockSelection();
  updateNonviolenceScreen();
  updateTruthfulnessScreen();
  updateChastityScreen();
  updateLoveAllBeingsScreen();
  updateDailyChoicesScreen();
  updateMeditationScreen();
  updateHistoryMonthsScreen();
  updateHistoryDaysScreen();
  updateHistoryAnalyticsScreen();
  updateInstructionScreen();
  updateObservationsScreen();
}

function selectLanguage(language) {
  const selectedLanguage = supportedLanguages.includes(language) ? language : 'ru';
  applyLanguage(selectedLanguage);
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
  } catch {
    // The interface stays usable when browser storage is unavailable.
  }
}

function openEditor(dateKey) {
  const entry = getEntry(dateKey);
  if (!entry) return;
  activeDate = dateKey;
  entryText.value = entry.text || '';
  saveState = '';
  updateEditorDetails();
  updateSaveStatus();
  showScreen('editor');
  entryText.focus();
}

function showDatePicker() {
  noticeDate = null;
  entryDate.value = getTodayKey();
  updateDateNotice();
  showScreen('date');
}

function showBlocks() {
  selectedBlock = null;
  updateBlockSelection();
  showScreen('blocks');
}

function openNonviolence(dateKey = getTodayKey()) {
  activeNonviolenceDate = dateKey;
  clearNonviolenceSaveFeedbackTimer();
  pendingNonviolenceChange = null;
  const counters = getNonviolenceCounters(dateKey);
  nonviolenceSaveState = NONVIOLENCE_FIELDS.some((field) => counters[field] !== null) ? 'persisted' : 'idle';
  nonviolenceNextNoticeVisible = false;
  updateNonviolenceScreen();
  showScreen('nonviolence');
}

function openTruthfulness(dateKey = getTodayKey()) {
  activeTruthfulnessDate = dateKey;
  clearTruthfulnessSaveFeedbackTimer();
  pendingTruthfulnessChange = null;
  const counters = getTruthfulnessCounters(dateKey);
  truthfulnessSaveState = TRUTHFULNESS_FIELDS.some((field) => counters[field] !== null) ? 'persisted' : 'idle';
  truthfulnessNextNoticeVisible = false;
  updateTruthfulnessScreen();
  showScreen('truthfulness');
}

function openChastity(dateKey = getTodayKey()) {
  activeChastityDate = dateKey;
  clearChastitySaveFeedbackTimer();
  pendingChastityChange = null;
  const counters = getChastityCounters(dateKey);
  chastitySaveState = CHASTITY_FIELDS.some((field) => counters[field] !== null) ? 'persisted' : 'idle';
  chastityNextNoticeVisible = false;
  updateChastityScreen();
  showScreen('chastity');
}

function openLoveAllBeings(dateKey = getTodayKey()) {
  activeLoveAllBeingsDate = dateKey;
  clearLoveAllBeingsSaveFeedbackTimer();
  pendingLoveAllBeingsChange = null;
  const counters = getLoveAllBeingsCounters(dateKey);
  loveAllBeingsSaveState = LOVE_ALL_BEINGS_FIELDS.some((field) => counters[field] !== null) ? 'persisted' : 'idle';
  loveAllBeingsNextNoticeVisible = false;
  updateLoveAllBeingsScreen();
  showScreen('loveAllBeings');
}

function openDailyChoices(dateKey = getTodayKey()) {
  activeDailyChoicesDate = dateKey;
  clearDailyChoicesSaveFeedbackTimer();
  const choices = getDailyChoices(dateKey);
  dailyChoicesSaveState = DAILY_CHOICE_FIELDS.some((field) => choices[field] !== null) ? 'persisted' : 'idle';
  dailyChoicesNextNoticeVisible = false;
  updateDailyChoicesScreen();
  showScreen('dailyChoices');
}

function openMeditation(dateKey = getTodayKey()) {
  activeMeditationDate = dateKey;
  clearMeditationSaveFeedbackTimer();
  const entry = getEntry(dateKey);
  meditationSaveState = MEDITATION_FIELDS.some((field) => getCounterValue(entry?.[field]) !== null) ? 'persisted' : 'idle';
  updateMeditationScreen();
  showScreen('meditation');
}

function savePendingNonviolenceChange() {
  if (!pendingNonviolenceChange || !activeNonviolenceDate) return;
  const { field, value } = pendingNonviolenceChange;
  nonviolenceSaveState = 'saving';
  updateNonviolenceScreen();

  if (saveNonviolenceCounter(activeNonviolenceDate, field, value)) {
    pendingNonviolenceChange = null;
    nonviolenceSaveState = 'auto-saved';
    updateNonviolenceScreen();
    scheduleNonviolenceSavedFeedback();
  } else {
    nonviolenceSaveState = 'error';
    updateNonviolenceScreen();
  }
}

function savePendingTruthfulnessChange() {
  if (!pendingTruthfulnessChange || !activeTruthfulnessDate) return;
  const { field, value } = pendingTruthfulnessChange;
  truthfulnessSaveState = 'saving';
  updateTruthfulnessScreen();

  if (saveTruthfulnessCounter(activeTruthfulnessDate, field, value)) {
    pendingTruthfulnessChange = null;
    truthfulnessSaveState = 'auto-saved';
    updateTruthfulnessScreen();
    scheduleTruthfulnessSavedFeedback();
  } else {
    truthfulnessSaveState = 'error';
    updateTruthfulnessScreen();
  }
}

function savePendingChastityChange() {
  if (!pendingChastityChange || !activeChastityDate) return;
  const { field, value } = pendingChastityChange;
  chastitySaveState = 'saving';
  updateChastityScreen();

  if (saveChastityCounter(activeChastityDate, field, value)) {
    pendingChastityChange = null;
    chastitySaveState = 'auto-saved';
    updateChastityScreen();
    scheduleChastitySavedFeedback();
  } else {
    chastitySaveState = 'error';
    updateChastityScreen();
  }
}

function savePendingLoveAllBeingsChange() {
  if (!pendingLoveAllBeingsChange || !activeLoveAllBeingsDate) return;
  const { field, value } = pendingLoveAllBeingsChange;
  loveAllBeingsSaveState = 'saving';
  updateLoveAllBeingsScreen();

  if (saveLoveAllBeingsCounter(activeLoveAllBeingsDate, field, value)) {
    pendingLoveAllBeingsChange = null;
    loveAllBeingsSaveState = 'auto-saved';
    updateLoveAllBeingsScreen();
    scheduleLoveAllBeingsSavedFeedback();
  } else {
    loveAllBeingsSaveState = 'error';
    updateLoveAllBeingsScreen();
  }
}

function changeNonviolenceCounter(button) {
  if (!activeNonviolenceDate || !isNonviolenceEditable()) return;
  const field = button.dataset.nonviolenceField;
  const counters = getNonviolenceCounters(activeNonviolenceDate);
  const currentValue = counters[field];
  let nextValue = currentValue;

  if (button.dataset.counterAction === 'increase') nextValue = (currentValue ?? 0) + 1;
  if (button.dataset.counterAction === 'decrease') {
    if (currentValue === null || currentValue === 0) return;
    nextValue = currentValue - 1;
  }
  if (button.dataset.counterAction === 'zero') nextValue = 0;
  pendingNonviolenceChange = { field, value: nextValue };
  savePendingNonviolenceChange();
}

function changeTruthfulnessCounter(button) {
  if (!activeTruthfulnessDate || !isTruthfulnessEditable()) return;
  const field = button.dataset.truthfulnessField;
  const counters = getTruthfulnessCounters(activeTruthfulnessDate);
  const currentValue = counters[field];
  const action = button.dataset.truthfulnessAction;
  let nextValue = currentValue;

  if (action === 'increase') nextValue = (currentValue ?? 0) + 1;
  if (action === 'decrease') {
    if (currentValue === null || currentValue === 0) return;
    nextValue = currentValue - 1;
  }
  if (action === 'zero') nextValue = 0;
  pendingTruthfulnessChange = { field, value: nextValue };
  savePendingTruthfulnessChange();
}

function changeChastityCounter(button) {
  if (!activeChastityDate || !isChastityEditable()) return;
  const field = button.dataset.chastityField;
  const counters = getChastityCounters(activeChastityDate);
  const currentValue = counters[field];
  const action = button.dataset.chastityAction;
  let nextValue = currentValue;

  if (action === 'increase') nextValue = (currentValue ?? 0) + 1;
  if (action === 'decrease') {
    if (currentValue === null || currentValue === 0) return;
    nextValue = currentValue - 1;
  }
  if (action === 'zero') nextValue = 0;
  pendingChastityChange = { field, value: nextValue };
  savePendingChastityChange();
}

function changeLoveAllBeingsCounter(button) {
  if (!activeLoveAllBeingsDate || !isLoveAllBeingsEditable()) return;
  const field = button.dataset.loveAllBeingsField;
  const counters = getLoveAllBeingsCounters(activeLoveAllBeingsDate);
  const currentValue = counters[field];
  const action = button.dataset.loveAllBeingsAction;
  let nextValue = currentValue;

  if (action === 'increase') nextValue = (currentValue ?? 0) + 1;
  if (action === 'decrease') {
    if (currentValue === null || currentValue === 0) return;
    nextValue = currentValue - 1;
  }
  if (action === 'zero') nextValue = 0;
  pendingLoveAllBeingsChange = { field, value: nextValue };
  savePendingLoveAllBeingsChange();
}

function changeDailyChoice(button) {
  if (!activeDailyChoicesDate || !isDailyChoicesEditable()) return;
  const field = button.dataset.dailyChoiceSection;
  const value = button.dataset.dailyChoiceValue;
  if (!DAILY_CHOICE_FIELDS.includes(field) || (value !== 'yes' && value !== 'no')) return;

  if (saveDailyChoice(activeDailyChoicesDate, field, value)) {
    dailyChoicesSaveState = 'auto-saved';
    updateDailyChoicesScreen();
    scheduleDailyChoicesSavedFeedback();
  } else {
    dailyChoicesSaveState = 'error';
    updateDailyChoicesScreen();
  }
}

function changeMeditationCounter(button) {
  if (!activeMeditationDate || !isMeditationEditable()) return;
  const field = button.dataset.meditationField;
  const action = button.dataset.meditationAction;
  if (!MEDITATION_FIELDS.includes(field)) return;

  const counters = getMeditationCounters(activeMeditationDate);
  const currentValue = counters[field];
  const nextValue = action === 'increase' ? currentValue + 1 : currentValue - 1;
  if (nextValue < 0) return;

  if (saveMeditationCounter(activeMeditationDate, field, nextValue)) {
    meditationSaveState = 'auto-saved';
    updateMeditationScreen();
    scheduleMeditationSavedFeedback();
  } else {
    meditationSaveState = 'error';
    updateMeditationScreen();
  }
}

function persistActiveEntry(showFeedback = true) {
  if (!activeDate) return;
  const wasSaved = saveEntryForDate(activeDate, entryText.value);
  saveState = wasSaved ? 'saved' : 'error';
  if (showFeedback || !wasSaved) updateSaveStatus();
  else saveStatus.textContent = '';
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => selectLanguage(button.dataset.language));
});
startButton.addEventListener('click', () => showScreen('menu'));
document.querySelector('#menu-back').addEventListener('click', () => showScreen('landing'));
instructionButton.addEventListener('click', openInstruction);
document.querySelector('#instruction-back').addEventListener('click', () => showScreen('menu'));
observationsButton.addEventListener('click', openObservations);
document.querySelector('#observations-back').addEventListener('click', () => showScreen('menu'));
observationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitObservation();
});
observationCancel.addEventListener('click', cancelObservationEdit);
document.querySelector('#blocks-back').addEventListener('click', () => showScreen('menu'));
document.querySelector('#nonviolence-back').addEventListener('click', showBlocks);
nonviolenceNext.addEventListener('click', () => {
  openTruthfulness();
});
nonviolenceRetry.addEventListener('click', savePendingNonviolenceChange);
document.querySelector('#truthfulness-back').addEventListener('click', showBlocks);
truthfulnessNext.addEventListener('click', () => {
  openChastity();
});
truthfulnessRetry.addEventListener('click', savePendingTruthfulnessChange);
document.querySelector('#chastity-back').addEventListener('click', showBlocks);
chastityNext.addEventListener('click', () => {
  openLoveAllBeings();
});
chastityRetry.addEventListener('click', savePendingChastityChange);
document.querySelector('#love-all-beings-back').addEventListener('click', showBlocks);
loveAllBeingsNext.addEventListener('click', () => {
  openDailyChoices();
});
loveAllBeingsRetry.addEventListener('click', savePendingLoveAllBeingsChange);
document.querySelector('#daily-choices-back').addEventListener('click', showBlocks);
dailyChoicesNext.addEventListener('click', () => {
  openMeditation();
});
document.querySelector('#meditation-back').addEventListener('click', showBlocks);
document.querySelector('#history-months-back').addEventListener('click', () => showScreen('menu'));
document.querySelector('#history-days-back').addEventListener('click', openHistoryMonths);
historyAnalyticsButton.addEventListener('click', openHistoryAnalytics);
document.querySelector('#history-analytics-back').addEventListener('click', () => openHistoryMonth(selectedHistoryMonth));
document.querySelector('#date-back').addEventListener('click', () => showScreen('menu'));
document.querySelector('#editor-back').addEventListener('click', () => showScreen('menu'));
continueButton.addEventListener('click', showBlocks);
journalBlockButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.journalBlock === 'nonviolence') {
      openNonviolence();
      return;
    }
    if (button.dataset.journalBlock === 'truthfulness') {
      openTruthfulness();
      return;
    }
    if (button.dataset.journalBlock === 'chastity') {
      openChastity();
      return;
    }
    if (button.dataset.journalBlock === 'loveHumility') {
      openLoveAllBeings();
      return;
    }
    if (button.dataset.journalBlock === 'vegetarianDiet' || button.dataset.journalBlock === 'selflessService') {
      openDailyChoices();
      return;
    }
    if (button.dataset.journalBlock === 'meditationTime') {
      openMeditation();
      return;
    }
    selectedBlock = button.dataset.journalBlock;
    updateBlockSelection();
  });
});
counterButtons.forEach((button) => button.addEventListener('click', () => changeNonviolenceCounter(button)));
truthfulnessButtons.forEach((button) => button.addEventListener('click', () => changeTruthfulnessCounter(button)));
chastityButtons.forEach((button) => button.addEventListener('click', () => changeChastityCounter(button)));
loveAllBeingsButtons.forEach((button) => button.addEventListener('click', () => changeLoveAllBeingsCounter(button)));
dailyChoiceButtons.forEach((button) => button.addEventListener('click', () => changeDailyChoice(button)));
meditationButtons.forEach((button) => button.addEventListener('click', () => changeMeditationCounter(button)));
previousButton.addEventListener('click', openHistoryMonths);
entryDate.addEventListener('input', () => {
  noticeDate = null;
  updateDateNotice();
});
document.querySelector('#date-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedDate = entryDate.value;
  if (!selectedDate) return;
  if (getEntry(selectedDate)) openEditor(selectedDate);
  else {
    noticeDate = selectedDate;
    updateDateNotice();
  }
});
createDateEntry.addEventListener('click', () => {
  if (noticeDate && ensureEntry(noticeDate)) openEditor(noticeDate);
});
entryText.addEventListener('input', () => persistActiveEntry(false));
saveEntry.addEventListener('click', () => persistActiveEntry());

selectLanguage(getSavedLanguage() || getBrowserLanguage());
