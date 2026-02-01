import type { ColumnDef } from '@tanstack/react-table';
import type { Vendor } from './vendor.types';

import { ArrowDownIcon, ArrowUpIcon, Trash2 } from 'lucide-react';
import Avatar from 'react-avatar';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export const vendorColumns: ColumnDef<Vendor>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsSomePageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <div className='flex items-center gap-2'>
        <span>User Name</span>
        <Button
          variant='ghost'
          size='icon-sm'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {column.getIsSorted() === 'desc' ? (
            <ArrowUpIcon />
          ) : (
            <ArrowDownIcon />
          )}
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const vendor = row.original;
      return (
        <div className='flex items-center gap-3 2xl:min-w-[360px]'>
          <Avatar
            src={vendor.src}
            size='40px'
            round
          />
          <h3 className='font-semibold'>{vendor.name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => (
      <div className='text-muted-foreground'>{row.original.phone}</div>
    ),
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => (
      <div className='text-muted-foreground'>{row.original.role}</div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => (
      <div className='text-muted-foreground'>
        {new Date(row.original.createdAt).toLocaleDateString()}
      </div>
    ),
  },
  {
    id: 'action',
    header: 'Action',
    cell: () => (
      <Tooltip delayDuration={250}>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            size='icon-sm'
          >
            <Trash2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Delete</TooltipContent>
      </Tooltip>
    ),
  },
];
