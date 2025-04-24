
import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileDropdown } from '@/components/ui/ProfileDropdown';
import { useSidebar } from '@/components/ui/sidebar';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { toggleSidebar, isMobile } = useSidebar();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        )}
        <h1 className="text-xl font-semibold">{t('dashboard.titlePrefix')}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ProfileDropdown />
      </div>
    </header>
  );
}
