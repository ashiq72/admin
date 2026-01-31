/**
 * @copyright 2025 soundten
 * @lincese Apache-2.0
 */
// Custom modules
import { cn } from '@/lib/utils';

// Components

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from './ui/sidebar';

import { Button } from './ui/button';

// Hooks
import { useSidebar } from './ui/sidebar';

// Assets
import { LogOutIcon } from 'lucide-react';
import { Logo } from '@/assets/Logo';

// Constants
import { APP_SIDEBAR } from '@/constants';
import Avatar from 'react-avatar';
import UserMenu from './UserMenu';

export const AppSidebar = () => {
  const { isMobile } = useSidebar();

  return (
    <Sidebar
      variant='floating'
      collapsible='icon'
    >
      {/* Sidebar Header  */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenu>
            <SidebarMenuItem className='px-0.5 max-lg:p-2'>
              <Logo variant={isMobile ? 'default' : 'icon'} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroup>
              <SidebarMenu>
                {APP_SIDEBAR.primaryNav.map((item) => (
                  <SidebarMenuButton
                    key={`${item.url}-${item.title}`}
                    tooltip={item.title}
                    asChild
                  >
                    <a
                      href={item.url}
                      className=''
                    >
                      <item.Icon className='' />
                      <span> {item.title} </span>
                    </a>
                  </SidebarMenuButton>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* secondary nav */}
        {isMobile && (
          <SidebarGroup className='mt-auto'>
            <SidebarGroupContent>
              <SidebarGroup>
                <SidebarMenu>
                  {APP_SIDEBAR.secondaryNav.map((item) => (
                    <SidebarMenuButton
                      tooltip={item.title}
                      asChild
                    >
                      <a href={item.url}>
                        <item.Icon />
                        <span> {item.title} </span>
                      </a>
                    </SidebarMenuButton>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      {/* sidebar footer  */}
      <SidebarFooter className={cn(isMobile && 'border-t')}>
        <SidebarMenu>
          <SidebarMenuItem className={cn(isMobile && 'p-2')}>
            {isMobile ? (
              <div className='flex justify-between items-start gap-2'>
                <div className='grid grid-cols-[max-content_minmax(0, 1fr)] items-center gap-2'>
                  <div className='relative'>
                    <Avatar
                      src={APP_SIDEBAR.curProfile.src}
                      size='36px'
                      round='8px'
                    />
                    <div className=' absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 ring-sidebar ring-1'></div>
                  </div>
                  <div>
                    <h3 className='text-sm font-semibold'>
                      {APP_SIDEBAR.curProfile.name}
                    </h3>
                    <p className='text-sm text-muted-foreground tr'>
                      {APP_SIDEBAR.curProfile.email}
                    </p>
                  </div>
                </div>

                <Button
                  variant='ghost'
                  size='icon-sm'
                  aria-label='Logout'
                >
                  <LogOutIcon />
                </Button>
              </div>
            ) : (
              <UserMenu />
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
