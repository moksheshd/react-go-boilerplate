
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  Settings, 
  User 
} from 'lucide-react';
import { 
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
  SidebarRail
} from '@/components/ui/sidebar';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

export function Sidebar() {
  const { t } = useTranslation();
  const { color } = useTheme();
  
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: t('sidebar.dashboard'),
      href: '/dashboard',
    },
    {
      icon: LineChart,
      label: t('sidebar.analytics'),
      href: '/dashboard/analytics',
    },
    {
      icon: User,
      label: t('sidebar.profile'),
      href: '/dashboard/profile',
    },
    {
      icon: Settings,
      label: t('sidebar.settings'),
      href: '/dashboard/settings',
    }
  ];

  return (
    <ShadcnSidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 pt-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary">
            <span className="text-md font-semibold text-primary-foreground">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Themify</span>
            <span className="text-xs text-muted-foreground">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                        "hover:bg-accent hover:text-accent-foreground",
                        "focus:bg-accent focus:text-accent-foreground",
                        location.pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "transparent"
                      )}
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-center py-2">
          <SidebarTrigger className="text-primary hover:bg-accent hover:text-primary" />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </ShadcnSidebar>
  );
}
