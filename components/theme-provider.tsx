'use client';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 使用 resolvedTheme 确保与系统主题一致
  const currentTheme = mounted ? resolvedTheme || theme : undefined;

  return (
    <Theme appearance={currentTheme as 'light' | 'dark' | undefined} accentColor="blue">
      {children}
    </Theme>
  );
}