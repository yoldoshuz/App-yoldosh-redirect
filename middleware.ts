import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const ua = request.headers.get('user-agent') || '';

    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    // ВСТАВЬ СВОИ ССЫЛКИ ЗДЕСЬ
    const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.yoldosh.android';
    const IOS_URL = 'https://apps.apple.com/uz/app/yoldosh/id6754510387';

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