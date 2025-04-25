
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, 
  LogOut, 
  Languages, 
  SunMoon,
  Palette
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/custom/UserAvatar';
import { ModeToggle } from '@/components/custom/ModeToggle';
import { ThemeSelector } from '@/components/custom/ThemeSelector';
import { LanguageSelector } from '@/components/custom/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';

export function ProfileDropdown() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const { color } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (!user) return null;

  const handleSectionClick = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="relative flex cursor-pointer items-center gap-2 rounded-full p-1 outline-none hover:bg-accent focus:ring-2 focus:ring-primary">
          <UserAvatar className="h-8 w-8" />
          <span className="hidden md:block text-sm font-medium">{user.name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4 text-primary" />
          <span>{t('dashboard.profile')}</span>
        </DropdownMenuItem>
        
        <div 
          className="px-2 py-1.5 cursor-pointer flex items-center hover:bg-accent hover:text-accent-foreground rounded-sm"
          onClick={() => handleSectionClick('language')}
        >
          <Languages className="mr-2 h-4 w-4 text-primary" />
          <span>{t('settings.language')}</span>
        </div>
        
        {activeSection === 'language' && (
          <div className="px-2 py-1.5">
            <LanguageSelector asIcon={false} />
          </div>
        )}
        
        <div 
          className="px-2 py-1.5 cursor-pointer flex items-center hover:bg-accent hover:text-accent-foreground rounded-sm"
          onClick={() => handleSectionClick('theme-mode')}
        >
          <SunMoon className="mr-2 h-4 w-4 text-primary" />
          <span>{t('settings.themeMode')}</span>
        </div>
        
        {activeSection === 'theme-mode' && (
          <div className="px-2 py-1.5">
            <ModeToggle />
          </div>
        )}
        
        <div 
          className="px-2 py-1.5 cursor-pointer flex items-center hover:bg-accent hover:text-accent-foreground rounded-sm"
          onClick={() => handleSectionClick('color-theme')}
        >
          <Palette className="mr-2 h-4 w-4 text-primary" />
          <span>{t('settings.colorTheme')}</span>
        </div>
        
        {activeSection === 'color-theme' && (
          <div className="px-2 py-1.5">
            <ThemeSelector />
          </div>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="cursor-pointer text-destructive focus:text-destructive" 
          onClick={() => {
            setIsOpen(false);
            logout();
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t('dashboard.logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
