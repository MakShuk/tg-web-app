'use client';

import { init } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

interface TelegramWebApp {
  ready(): void;
  expand(): void;
  close(): void;
  isExpanded: boolean;
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
    start_param?: string;
  };
  MainButton: {
    text: string;
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    onClick(callback: () => void): void;
  };
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export function TelegramProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initializeTelegramSDK = async () => {
      // Проверка на наличие Telegram WebApp в window
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        try {
          await init();
        } catch (error) {
          console.error('Ошибка инициализации Telegram SDK:', error);
        }
      } else {
        console.log('Приложение запущено вне среды Telegram. Используется режим разработки.');
        // Здесь можно добавить мок-данные для тестирования
      }
    };

    initializeTelegramSDK();
  }, []);

  return <>{children}</>;
}