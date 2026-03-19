'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const ua = navigator.userAgent;

    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    // ВСТАВЬ СВОИ ССЫЛКИ
    const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.yoldosh.android';
    const IOS_URL = 'https://apps.apple.com/uz/app/yoldosh/id6754510387';

    if (isAndroid) {
      window.location.href = ANDROID_URL;
    } else if (isIOS) {
      window.location.href = IOS_URL;
    }
  }, []);

  return <div>Redirecting...</div>;
}