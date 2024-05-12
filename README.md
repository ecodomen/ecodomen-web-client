# Ecodomen Frontend App

В данном репозитории находится лендинг и личный кабинет пользователя.

Стэк:

```
Vue
Nuxt
PM2
Pinia
```

## Как работать в репозитории

Основной веткой является `dev`, в ней лежат все последние изменения, которые прошли ревью, так же из нее планируется собирать сборку
на тестовый сервер.

Новые фичи/исправления и тд делаем в новых ветках:

```
feature/ - для новых фич
fix/ - что-то фиксим
```

Далее делаем пулл-реквест в `dev` ветку и запрашиваем ревью, так же в пулл-реквесте запускается раннер и проходится eslint'ом по коду, запускает тесты

Если вы работаете над правками для определенного релиза (это ветки `release/*`), то тянетесь от ветки релиза и делаете мерж в эту ветку

Ниже приведена документация, как все дело склонировать, настроить, запустить

## Структура папок

- `utils/constants` - переиспользуемые константы. Должны быть в uppercase
- `stores/` - сторы pinia

## Именование файлов и папок

Папки в kebab-case. \
Файлы с компонентами: PascalCase, остальные - kebab-case

## Техдолг

Техдолг помечается комментарием:

```ts
// TODO: <что надо сделать>
```

## Установка зависимостей

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3010`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.