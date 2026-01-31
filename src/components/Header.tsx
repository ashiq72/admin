import { Button } from '@/components/ui/button';

import { useSidebar } from './ui/sidebar';

// Assets
import { Logo } from '@/assets/Logo';
import { MenuIcon, SearchIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Header() {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <header className=' flex justify-between gap-1 items-center py-3 ps-4 pe-2 border-b lg:hidden  '>
        <Logo />
        <div className='ml-auto'>
          <ThemeToggle />
        </div>
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleSidebar}
          aria-label='Toggle mobile menu'
        >
          <MenuIcon />
        </Button>
      </header>

      <div className='lg:flex flex-col gap-4 lg:flex-row lg:justify-between hidden px-4 py-4'>
        <h1 className='text-xl font-extrabold'>Welcome back, Your place</h1>
        <div className=' flex gap-8'>
          <div className=' flex max-lg:hidden'>
            <ThemeToggle />
            <Button
              variant='ghost'
              size='icon'
              aria-label='search'
              className=''
            >
              <SearchIcon />
            </Button>
          </div>
          {/* <div className='flex items-center gap-3'>
            <Button
              variant='outline'
              className=''
            >
              <Settings2Icon />
              <span>Customize</span>
            </Button>
            <Button
              variant='outline'
              className=''
            >
              <DownloadIcon />
              <span>Export</span>
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
