const pageTitlePrefix = 'DEVOCEAN – ';

export default {
  'Welcome back': 'С возвращением в {appname}!',
  Welcome: 'Добро пожаловать в {appname}!',
  appname: 'DEVocean Manager',
  'Welcome back subtitle': 'Приступаем к работе',
  'Welcome subtitle': 'С чего мы начнем?',
  Notifications: 'Уведомления',

  'New notification': 'Новое уведомление',

  //*Edit notification form
  'Short text': 'Краткий текст',
  'Short text (5-50 chars)': 'Краткий текст (5-50 знаков)',

  'Full text': 'Полный текст',
  'Date and time': 'Дата и время',
  Addressee: 'Получатели',
  'MM-dd-yyyy hh:mm': 'ММ-дд-гггг чч:мм',

  vowels: 'аеёиоуыэю',
  consonants: 'бвгджзклмнпрстфхцчшщ',

  progressFractionLabel: '{reportedTime} затрачено от расчетных {estimate}',
  priorityLabel: '{priority} приоритет',
  progressLabel: 'Прогресс {progress} процентов',
  statusLabel: 'Статус {status}',

  highPriority: 'Высокий',
  highestPriority: 'Наивысший',
  mediumPriority: 'Средний',
  lowPriority: 'Низкий',
  blockerPriority: 'Блокирующий',

  Status: 'Статус {status}',
  TimeInStatus: '{time} в статусе',
  open: 'Открыта',
  wip: 'В работе',
  closed: 'Закрыта',
  backlog: 'Идеи',

  Task: 'Задача {title}: {priority} приоритет, статус {status}',
  'Task estimated':
    'Задача {title}: {priority} приоритет, статус {status}, {reportedTime} затрачено от расчетных {estimate}, прогресс {progress} процентов',
  TaskList: 'Задачи по спискам',

  folder: 'Папка задач {name}',
  list: 'Список задач {name}',
  Folders: 'Список папок задач',
  Subfolders: 'Подпапки папки {name}',

  Unassigned: 'Не назначенные',

  Reported: 'Затрачено',
  'from estimate': 'от расчетных {estimate}',

  Priority: 'Приоритет',
  'Reported time': 'Затраченное время',

  Description: 'Описание',
  'Comments for task': 'Комментарии к задаче',

  heFull: 'он',
  sheFull: 'она',
  theyFull: 'они',
  heForm: 'его',
  sheForm: 'ее',
  theyForm: 'их',

  shortName: 'or зовите {referAs} {shortName}',
  aka: '{shortName}',

  delayed: 'Отложено',
  cancelled: 'Отменено',

  //*Pages titles
  'home.title': `${pageTitlePrefix}Домашняя страница`,
  'login.title': `${pageTitlePrefix}Вход`,
  'register.title': `${pageTitlePrefix}Регистрация`,
  'welcome.title': `${pageTitlePrefix}Добро пожаловать`,
  'collections.new.title': `${pageTitlePrefix}Новая коллекция задач`,
  'collections.edit.title': `${pageTitlePrefix}Редактировать коллекцию задач`,
  'documents.title': `${pageTitlePrefix}Документы`,
  'documents.new.title': `${pageTitlePrefix}Новый документ`,
  'documents.edit.title': `${pageTitlePrefix}Редактировать документ`,
  'documents.id.title': `${pageTitlePrefix}Документ`,
  '403.title': `${pageTitlePrefix}Отказано в доступе`,
  '404.title': `${pageTitlePrefix}Страница не найдена`,
  'notifications.title': `${pageTitlePrefix}Уведомления`,
  'notifications.new.title': `${pageTitlePrefix}Новое уведомление`,
  'notifications.edit.title': `${pageTitlePrefix}Редактировать уведомление`,
  'notifications.id.title': `${pageTitlePrefix}Уведомление`,
  'tasks.kanban.title': `${pageTitlePrefix}Kanban-доска`,
  'tasks.list.title': `${pageTitlePrefix}Списки задач`,
  'tasks.new.title': `${pageTitlePrefix}Новая задача`,
  'tasks.team.title': `${pageTitlePrefix}Задачи по исполнителям`,
  'tasks.edit.title': `${pageTitlePrefix}Редактировать задачу`,
  'tasks.id.title': `${pageTitlePrefix}Задача`,
  'tasks.comments.discussions.title': `${pageTitlePrefix}Обсуждение задачи`,
  'tasks.comments.history.title': `${pageTitlePrefix}История изменений задачи`,
  'tasks.comments.reports.title': `${pageTitlePrefix}Отчеты о времени выполнения задачи`,
  'tasks.comments.statuses.title': `${pageTitlePrefix}История изменений статуа задачи`,
  'teammates.title': `${pageTitlePrefix}Команда`,
  'teammates.init.title': `${pageTitlePrefix}Заполнение профиля`,
  'teammates.new.title': `${pageTitlePrefix}Новый профиль`,
  'teammates.edit.title': `${pageTitlePrefix}Редактировать профиль`,
  'teammates.id.title': `${pageTitlePrefix}Профиль члена команды`,
};
