// /*
//  * @copyright 2025 soundten
//  * @lincese Apache-2.0
//  */

// import type { ColumnDef } from '@tanstack/react-table';
// import { Checkbox } from './ui/checkbox';
// import { Button } from './ui/button';
// import { ArrowDownIcon, ArrowUpIcon, Trash2 } from 'lucide-react';
// import Avatar from 'react-avatar';
// import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

// export const Columns = () => {
//   return <div>Columns</div>;
// };

// export type Vendor = {
//   src: string;
//   name: string;
//   phone: string;
//   role: string;
//   createdAt: string;
// };

// export const columns: ColumnDef<Vendor>[] = [
//   {
//     id: 'select',
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsSomePageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && 'indeterminate')
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label='Select all'
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label='Select row'
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: 'name',
//     header: ({ column }) => (
//       <div className='flex items-center gap-2'>
//         <span>User Name</span>
//         <Button
//           variant='ghost'
//           size='icon-sm'
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           {column.getIsSorted() === 'desc' ? (
//             <ArrowUpIcon />
//           ) : (
//             <ArrowDownIcon />
//           )}
//         </Button>
//       </div>
//     ),
//     cell: ({ row }) => {
//       const Vendor = row.original;
//       return (
//         <div className='flex items-center gap-3 2xl:min-w-[360px]'>
//           <Avatar
//             src={Vendor.src}
//             size='40px'
//             round
//           />
//           <div>
//             <h3 className='font-semibold'>{Vendor.name}</h3>
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: 'phone',
//     header: 'Phone',
//     cell: ({ row }) => (
//       <div className='text-muted-foreground '>{row.original.phone}</div>
//     ),
//   },
//   {
//     accessorKey: 'role',
//     header: 'Role',
//     cell: ({ row }) => (
//       <div className='text-muted-foreground '>{row.original.role}</div>
//     ),
//   },
//   {
//     accessorKey: 'createdAt',
//     header: 'Created At',
//     cell: ({ row }) => {
//       const date = row.original.createdAt;
//       return (
//         <div className='text-muted-foreground'>
//           {new Date(date).toLocaleDateString()}
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: 'action',
//     header: 'Action',
//     id: 'action',
//     cell: () => {
//       return (
//         <div className='flex gap-1'>
//           <Tooltip delayDuration={250}>
//             <TooltipTrigger asChild>
//               <Button
//                 variant='ghost'
//                 size='icon-sm'
//                 aria-label='Delete vendor'
//               >
//                 <Trash2 />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Delete</TooltipContent>
//           </Tooltip>
//         </div>
//       );
//     },
//   },
// ];
