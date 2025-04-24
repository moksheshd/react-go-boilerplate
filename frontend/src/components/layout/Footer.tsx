
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { color } = useTheme();

  return (
    <footer className="flex h-14 items-center justify-center border-t bg-background px-4 md:px-6">
      <p className="text-sm text-muted-foreground">
        © {currentYear} Themify Dashboard. All rights reserved.
      </p>
    </footer>
  );
}
