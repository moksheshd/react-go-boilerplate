
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { 
  Button 
} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';

type LanguageOption = {
  value: "en" | "hi";
  label: string;
  nativeLabel: string;
  flag: string;
};

export function LanguageSelector({ asIcon = false }: { asIcon?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const { color } = useTheme();

  const languages: LanguageOption[] = [
    { value: "en", label: "English", nativeLabel: "English", flag: "🇺🇸" },
    { value: "hi", label: "Hindi", nativeLabel: "हिन्दी", flag: "🇮🇳" }
  ];
  
  const currentLanguage = languages.find(lang => lang.value === language) || languages[0];

  if (asIcon) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <span className="text-base">{currentLanguage.flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.value}
              onClick={() => setLanguage(lang.value)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span>{lang.flag}</span>
              <span>{lang.nativeLabel}</span>
              {lang.value === language && (
                <span className="ml-auto">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      {languages.map((lang) => (
        <Button
          key={lang.value}
          variant={lang.value === language ? "default" : "ghost"}
          className={`flex items-center justify-between gap-2 w-full ${lang.value === language ? "bg-primary text-primary-foreground" : ""}`}
          onClick={() => setLanguage(lang.value)}
        >
          <div className="flex items-center gap-2">
            <span>{lang.flag}</span>
            <span>{lang.nativeLabel}</span>
          </div>
          {lang.value === language && (
            <span className="ml-auto">✓</span>
          )}
        </Button>
      ))}
    </div>
  );
}
