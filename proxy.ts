import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const ua = request.headers.get('user-agent') || '';

    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    // ВСТАВЬ СВОИ ССЫЛКИ ЗДЕСЬ
    const ANDROID_URL = 'https://redirect.appmetrica.yandex.com/serve/173876829097132884';
    const IOS_URL = 'https://redirect.appmetrica.yandex.com/serve/173876829097132884';

    if (isAndroid) {
        return NextResponse.redirect(ANDROID_URL);
    }

    if (isIOS) {
        return NextResponse.redirect(IOS_URL);
    }

    // Если ПК — показываем страницу
    return NextResponse.next();
}

// Ограничиваем только на нужный route (например "/")
export const config = {
    matcher: '/',
};