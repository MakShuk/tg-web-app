# Telegram Web App

Это веб-приложение разработано для интеграции с Telegram Bot API, построенное с использованием [Next.js](https://nextjs.org).

## Технологии

- [Next.js](https://nextjs.org) - React фреймворк для продакшн
- [TypeScript](https://www.typescriptlang.org/) - Типизированный JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS фреймворк
- [Docker](https://www.docker.com/) - Контейнеризация приложения

## Структура проекта

```
src/
├── app/
│   ├── components/
│   │   ├── footer/         # Компонент подвала
│   │   └── function-card/  # Карточка функционала
│   ├── profile/           # Страница профиля
│   └── page.tsx          # Главная страница
```

## Запуск проекта

### Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Docker

```bash
# Сборка образа
docker compose build

# Запуск контейнера
docker compose up
```

## Деплой

Проект настроен для автоматического деплоя через GitHub Actions (см. `.github/workflows/deploy.yml`).

## API Reference

Для интеграции с Telegram Bot API, пожалуйста, обратитесь к [официальной документации](https://core.telegram.org/bots/webapps).
