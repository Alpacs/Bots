# Боты для некоторых соцсетей


## На фронтенд можно посмотреть по ссылке:
https://alpacs.github.io/Bots/

## Насчёт БД
```
Для работы сервера также нужна база данных PostgreSQL.
Название базы данных: railway_bots
Первая таблица: chats_tg
  id_chat_tg: integer, NOT NULL, primary key
  username: character varying, NOT NULL
  first_name: character varying, NOT NULL
  type_chat: character varying, NOT NULL
Вторая таблица:
  id_user: integer, NOT NULL
```

## Насчёт токенов
```
Для запуска ботов понадобятся их ключи. Боты получают их по пути ./backend/telegram/config.js и ./frontend/vk/config.js
```
## Скачивание пакетов npm, применяется для обоих папок
```
npm i 
npm i serve (для фронтенда)
```

### Запуск сервера и фронтенда
```
npm start (запуск сервера)
Для закрытия ctrl + c

serve -s dist (если запускать фронтенд из dist)
npm run serve (если запускать фронтенд не из dist)
```

### Запуск сервера
```
serve -s dist (если запускать из dist)
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
