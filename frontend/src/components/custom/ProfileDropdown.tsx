
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, 
  LogOut, 
  Languages, 
  SunMoon,
  Palette,
  Settings,
  ChevronRight
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
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

  if (!user) return null;

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
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4 text-primary" />
            <span>{t('settings.title')}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="cursor-pointer">
                <Languages className="mr-2 h-4 w-4 text-primary" />
                <span>{t('settings.language')}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-2">
                <LanguageSelector asIcon={false} />
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="cursor-pointer">
                <SunMoon className="mr-2 h-4 w-4 text-primary" />
                <span>{t('settings.themeMode')}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-2">
                <ModeToggle />
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="cursor-pointer">
                <Palette className="mr-2 h-4 w-4 text-primary" />
                <span>{t('settings.colorTheme')}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-2">
                <ThemeSelector />
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        
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
