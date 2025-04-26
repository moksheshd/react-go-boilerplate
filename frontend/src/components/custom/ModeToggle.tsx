
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle({ asIcon = false }: { asIcon?: boolean }) {
  const { mode, toggleMode } = useTheme();
  const { t } = useTranslation();

  if (asIcon) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            {mode === 'light' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => mode === 'dark' && toggleMode()}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Sun className="h-4 w-4" />
            <span>{t('settings.lightMode')}</span>
            {mode === 'light' && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => mode === 'light' && toggleMode()}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Moon className="h-4 w-4" />
            <span>{t('settings.darkMode')}</span>
            {mode === 'dark' && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <Button
        variant={mode === 'light' ? "default" : "ghost"}
        onClick={() => mode === 'dark' && toggleMode()}
        className={`flex items-center justify-between w-full ${mode === 'light' ? "bg-primary text-primary-foreground" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4 text-primary" />
          <span>{t('settings.lightMode')}</span>
        </div>
        {mode === 'light' && <span className="ml-auto">✓</span>}
      </Button>
      
      <Button
        variant={mode === 'dark' ? "default" : "ghost"}
        onClick={() => mode === 'light' && toggleMode()}
        className={`flex items-center justify-between w-full ${mode === 'dark' ? "bg-primary text-primary-foreground" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Moon className="h-4 w-4 text-primary" />
          <span>{t('settings.darkMode')}</span>
        </div>
        {mode === 'dark' && <span className="ml-auto">✓</span>}
      </Button>
    </div>
  );
}
