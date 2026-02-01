import { Loader2 } from 'lucide-react';

export const DataTableSkeleton = () => {
  return (
    <div className='absolute inset-0 z-20 flex items-center justify-center bg-background/60 backdrop-blur-[2px]'>
      <div className='flex items-center gap-2 text-muted-foreground'>
        <Loader2 className='h-5 w-5 animate-spin' />
        <span className='text-sm font-medium'>Loading...</span>
      </div>
    </div>
  );
};
