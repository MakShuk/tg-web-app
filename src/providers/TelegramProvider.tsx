'use client';

import { init } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

declare global {
    interface Window {
        Telegram?: {
            WebApp?: any;
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