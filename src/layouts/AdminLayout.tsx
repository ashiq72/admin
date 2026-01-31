import { Outlet } from 'react-router-dom';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';

export default function AdminLayout() {
  return (
    <SidebarProvider open={false}>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className='p-4'>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
